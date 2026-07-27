const crypto = require('crypto');
const User = require('../models/User');
const generateToken = require('../utils/generateToken');
const sendEmail = require('../utils/sendEmail');

// @desc Register new user (or admin)
// @route POST /api/auth/register
exports.register = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: 'Please provide name, email and password' });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const user = new User({
      name,
      email,
      password,
      role: role === 'admin' ? 'admin' : 'user',
    });

    const verificationToken = user.generateVerificationToken();
    await user.save();

    const verifyUrl = `${process.env.CLIENT_URL}/verify-email/${verificationToken}`;

    await sendEmail({
      to: user.email,
      subject: 'Verify your email - Pizza Delivery',
      html: `<p>Hi ${user.name},</p>
             <p>Please verify your email by clicking the link below:</p>
             <a href="${verifyUrl}">${verifyUrl}</a>
             <p>This link expires in 24 hours.</p>`,
    });

    res.status(201).json({
      message: 'Registration successful. Please check your email to verify your account.',
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// @desc Verify email
// @route GET /api/auth/verify-email/:token
exports.verifyEmail = async (req, res) => {
  try {
    const hashedToken = crypto.createHash('sha256').update(req.params.token).digest('hex');

    const user = await User.findOne({
      verificationToken: hashedToken,
      verificationTokenExpires: { $gt: Date.now() },
    });

    if (!user) {
      return res.status(400).json({ message: 'Invalid or expired verification token' });
    }

    user.isVerified = true;
    user.verificationToken = undefined;
    user.verificationTokenExpires = undefined;
    await user.save();

    res.json({ message: 'Email verified successfully. You can now log in.' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// @desc Login user/admin
// @route POST /api/auth/login
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    if (!user.isVerified) {
      return res.status(403).json({ message: 'Please verify your email before logging in' });
    }

    const token = generateToken(user._id, user.role);

    res.json({
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// @desc Forgot password - send reset link
// @route POST /api/auth/forgot-password
exports.forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      // Do not reveal whether the email exists
      return res.json({ message: 'If that email exists, a reset link has been sent.' });
    }

    const resetToken = user.generateResetToken();
    await user.save();

    const resetUrl = `${process.env.CLIENT_URL}/reset-password/${resetToken}`;

    await sendEmail({
      to: user.email,
      subject: 'Password Reset - Pizza Delivery',
      html: `<p>Hi ${user.name},</p>
             <p>You requested a password reset. Click the link below (valid for 1 hour):</p>
             <a href="${resetUrl}">${resetUrl}</a>
             <p>If you didn't request this, please ignore this email.</p>`,
    });

    res.json({ message: 'If that email exists, a reset link has been sent.' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// @desc Reset password
// @route POST /api/auth/reset-password/:token
exports.resetPassword = async (req, res) => {
  try {
    const { password } = req.body;
    const hashedToken = crypto.createHash('sha256').update(req.params.token).digest('hex');

    const user = await User.findOne({
      resetPasswordToken: hashedToken,
      resetPasswordExpires: { $gt: Date.now() },
    });

    if (!user) {
      return res.status(400).json({ message: 'Invalid or expired reset token' });
    }

    user.password = password;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpires = undefined;
    await user.save();

    res.json({ message: 'Password reset successful. You can now log in.' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// @desc Get current logged-in user
// @route GET /api/auth/me
exports.getMe = async (req, res) => {
  res.json({ user: req.user });
};

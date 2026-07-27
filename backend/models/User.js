const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const crypto = require('crypto');

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    password: { type: String, required: true, minlength: 6 },
    role: { type: String, enum: ['user', 'admin'], default: 'user' },

    isVerified: { type: Boolean, default: false },
    verificationToken: String,
    verificationTokenExpires: Date,

    resetPasswordToken: String,
    resetPasswordExpires: Date,

    phone: { type: String, trim: true },
    address: { type: String, trim: true },
  },
  { timestamps: true }
);

// Hash password before save
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

userSchema.methods.comparePassword = function (candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

userSchema.methods.generateVerificationToken = function () {
  const token = crypto.randomBytes(32).toString('hex');
  this.verificationToken = crypto.createHash('sha256').update(token).digest('hex');
  this.verificationTokenExpires = Date.now() + 24 * 60 * 60 * 1000; // 24 hours
  return token;
};

userSchema.methods.generateResetToken = function () {
  const token = crypto.randomBytes(32).toString('hex');
  this.resetPasswordToken = crypto.createHash('sha256').update(token).digest('hex');
  this.resetPasswordExpires = Date.now() + 60 * 60 * 1000; // 1 hour
  return token;
};

module.exports = mongoose.model('User', userSchema);

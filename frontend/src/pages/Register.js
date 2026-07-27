import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import AuthVisual from '../components/AuthVisual';

const passwordScore = (pw) => {
  let score = 0;
  if (pw.length >= 6) score++;
  if (pw.length >= 10) score++;
  if (/[A-Z]/.test(pw) && /[0-9]/.test(pw)) score++;
  if (/[^A-Za-z0-9]/.test(pw)) score++;
  return score;
};

const Register = () => {
  const { register } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const score = passwordScore(form.password);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setMessage('');

    if (form.password.length < 6) {
      setError('Password must be at least 6 characters.');
      return;
    }

    setLoading(true);
    try {
      const data = await register(form.name, form.email, form.password, 'user');
      setMessage(data.message);
      setTimeout(() => navigate('/login'), 2500);
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-screen">
      <div className="auth-form-side">
        <div className="auth-card">
          <div className="auth-logo"><span className="auth-logo-mark">S</span>Slice<span className="dot">.</span>House</div>

          <h1>Create your account</h1>
          <p className="subtitle">Sign up to start building your perfect pizza.</p>

          {error && <div className="alert alert-error">{error}</div>}
          {message && <div className="alert alert-success">{message}</div>}

          {!message && (
            <form onSubmit={handleSubmit} noValidate>
              <div className="field">
                <label>Full name</label>
                <input
                  name="name"
                  placeholder="Jane Doe"
                  value={form.name}
                  onChange={handleChange}
                  required
                  autoFocus
                />
              </div>

              <div className="field">
                <label>Email address</label>
                <input
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="field password-field">
                <label>Password</label>
                <input
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="At least 6 characters"
                  value={form.password}
                  onChange={handleChange}
                  required
                  minLength={6}
                />
                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowPassword((s) => !s)}
                  tabIndex={-1}
                >
                  {showPassword ? 'Hide' : 'Show'}
                </button>
                {form.password && (
                  <div className="strength-bar">
                    {[0, 1, 2, 3].map((i) => (
                      <span
                        key={i}
                        style={{
                          background:
                            i < score
                              ? score <= 1
                                ? 'var(--danger)'
                                : score <= 2
                                ? 'var(--accent)'
                                : 'var(--success)'
                              : undefined,
                        }}
                      />
                    ))}
                  </div>
                )}
              </div>

              <button className="btn btn-primary btn-block" type="submit" disabled={loading}>
                {loading ? <span className="spinner" /> : 'Create Account'}
              </button>
            </form>
          )}

          <div className="auth-footer-link">
            Already have an account? <Link to="/login">Log in</Link>
          </div>
        </div>
      </div>
      <AuthVisual />
    </div>
  );
};

export default Register;

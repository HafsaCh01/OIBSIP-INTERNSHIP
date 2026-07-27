import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import AuthVisual from '../components/AuthVisual';

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const user = await login(form.email, form.password);
      navigate(user.role === 'admin' ? '/admin' : '/dashboard');
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed. Please check your credentials.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-screen">
      <div className="auth-form-side">
        <div className="auth-card">
          <div className="auth-logo"><span className="auth-logo-mark">S</span>Slice<span className="dot">.</span>House</div>

          <h1>Welcome back</h1>
          <p className="subtitle">Log in to order your favorite pizza.</p>

          {error && <div className="alert alert-error">{error}</div>}

          <form onSubmit={handleSubmit} noValidate>
            <div className="field">
              <label>Email address</label>
              <input
                name="email"
                type="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={handleChange}
                required
                autoFocus
              />
            </div>

            <div className="field password-field">
              <label>Password</label>
              <input
                name="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="********"
                value={form.password}
                onChange={handleChange}
                required
              />
              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowPassword((s) => !s)}
                tabIndex={-1}
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>

            <div className="auth-forgot">
              <Link to="/forgot-password">Forgot password?</Link>
            </div>

            <button className="btn btn-primary btn-block" type="submit" disabled={loading}>
              {loading ? <span className="spinner" /> : 'Log In'}
            </button>
          </form>

          <div className="auth-footer-link">
            Don't have an account? <Link to="/register">Create one</Link>
          </div>
        </div>
      </div>
      <AuthVisual />
    </div>
  );
};

export default Login;

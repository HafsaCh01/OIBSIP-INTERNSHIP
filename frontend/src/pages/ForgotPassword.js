import { useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../api/axios';
import AuthVisual from '../components/AuthVisual';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await api.post('/auth/forgot-password', { email });
      setMessage(data.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-screen">
      <div className="auth-form-side">
        <div className="auth-card">
          <div className="auth-logo"><span className="auth-logo-mark">S</span>Slice<span className="dot">.</span>House</div>

          <h1>Forgot password?</h1>
          <p className="subtitle">Enter your email and we'll send you a reset link.</p>

          {message && <div className="alert alert-success">{message}</div>}

          {!message && (
            <form onSubmit={handleSubmit} noValidate>
              <div className="field">
                <label>Email address</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  autoFocus
                />
              </div>
              <button className="btn btn-primary btn-block" type="submit" disabled={loading}>
                {loading ? <span className="spinner" /> : 'Send Reset Link'}
              </button>
            </form>
          )}

          <div className="auth-footer-link">
            <Link to="/login">Back to login</Link>
          </div>
        </div>
      </div>
      <AuthVisual />
    </div>
  );
};

export default ForgotPassword;

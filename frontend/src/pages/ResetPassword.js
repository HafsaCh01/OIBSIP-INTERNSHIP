import { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import api from '../api/axios';
import AuthVisual from '../components/AuthVisual';

const ResetPassword = () => {
  const { token } = useParams();
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const { data } = await api.post(`/auth/reset-password/${token}`, { password });
      setMessage(data.message);
      setTimeout(() => navigate('/login'), 2000);
    } catch (err) {
      setError(err.response?.data?.message || 'Reset failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-screen">
      <div className="auth-form-side">
        <div className="auth-card">
          <div className="auth-logo"><span className="auth-logo-mark">S</span>Slice<span className="dot">.</span>House</div>

          <h1>Reset your password</h1>
          <p className="subtitle">Choose a new password for your account.</p>

          {error && <div className="alert alert-error">{error}</div>}
          {message && <div className="alert alert-success">{message}</div>}

          {!message && (
            <form onSubmit={handleSubmit} noValidate>
              <div className="field">
                <label>New password</label>
                <input
                  type="password"
                  placeholder="At least 6 characters"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  minLength={6}
                  autoFocus
                />
              </div>
              <button className="btn btn-primary btn-block" type="submit" disabled={loading}>
                {loading ? <span className="spinner" /> : 'Reset Password'}
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

export default ResetPassword;

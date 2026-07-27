import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import api from '../api/axios';
import AuthVisual from '../components/AuthVisual';

const VerifyEmail = () => {
  const { token } = useParams();
  const [message, setMessage] = useState('Verifying your email...');
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const verify = async () => {
      try {
        const { data } = await api.get(`/auth/verify-email/${token}`);
        setMessage(data.message);
        setSuccess(true);
      } catch (err) {
        setMessage(err.response?.data?.message || 'Verification failed');
      } finally {
        setLoading(false);
      }
    };
    verify();
  }, [token]);

  return (
    <div className="auth-screen">
      <div className="auth-form-side">
        <div className="auth-card" style={{ textAlign: 'center' }}>
          <div className="auth-logo" style={{ justifyContent: 'center' }}>
            <span className="auth-logo-mark">S</span>Slice<span className="dot">.</span>House
          </div>

          <h1>Email Verification</h1>

          <div style={{ margin: '30px 0' }}>
            {loading ? (
              <span className="spinner" style={{ width: 28, height: 28 }} />
            ) : (
              <div
                style={{
                  width: 56,
                  height: 56,
                  margin: '0 auto',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: 'var(--font-mono)',
                  fontSize: 22,
                  fontWeight: 700,
                  border: `1.5px solid ${success ? 'var(--success)' : 'var(--danger)'}`,
                  color: success ? 'var(--success)' : 'var(--danger)',
                }}
              >
                {success ? '✓' : '✕'}
              </div>
            )}
          </div>

          <p className="subtitle">{message}</p>

          {success && (
            <Link to="/login" className="btn btn-primary btn-block" style={{ marginTop: 12 }}>
              Go to Login
            </Link>
          )}
        </div>
      </div>
      <AuthVisual />
    </div>
  );
};

export default VerifyEmail;

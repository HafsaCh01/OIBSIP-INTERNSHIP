import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useCart } from '../context/CartContext';
import Navbar from '../components/Navbar';

const Checkout = () => {
  const { items, total, clearCart } = useCart();
  const navigate = useNavigate();
  const [placing, setPlacing] = useState(false);
  const [placed, setPlaced] = useState(false);

  const handlePlaceOrder = () => {
    setPlacing(true);
    // Razorpay test-mode integration will hook in here in Phase 3
    setTimeout(() => {
      setPlacing(false);
      setPlaced(true);
      clearCart();
    }, 1200);
  };

  if (items.length === 0 && !placed) {
    return (
      <div className="dash-page">
        <Navbar />
        <div className="dash-content" style={{ paddingTop: 60 }}>
          <div className="empty-state">
            <img className="emoji" src="https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=400&q=80" alt="" />
            Your cart is empty.
            <div style={{ marginTop: 20 }}>
              <button className="btn btn-primary" onClick={() => navigate('/dashboard')}>
                Back to Menu
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (placed) {
    return (
      <div className="dash-page">
        <Navbar />
        <div className="dash-content" style={{ paddingTop: 60, textAlign: 'center' }}>
          <div
            style={{
              width: 56,
              height: 56,
              margin: '0 auto 24px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: 'var(--font-mono)',
              fontSize: 22,
              fontWeight: 700,
              border: '1.5px solid var(--success)',
              color: 'var(--success)',
            }}
          >
            ✓
          </div>
          <h2>Order placed successfully!</h2>
          <p style={{ color: 'var(--text-dim)' }}>
            Your pizza is being prepared. Track its status under "My Orders".
          </p>
          <button className="btn btn-primary" style={{ marginTop: 20 }} onClick={() => navigate('/dashboard')}>
            Back to Dashboard
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="dash-page">
      <Navbar />
      <div className="dash-content" style={{ paddingTop: 40, maxWidth: 600 }}>
        <h1 style={{ marginBottom: 24 }}>Checkout</h1>

        <div className="order-summary" style={{ position: 'static', marginBottom: 24 }}>
          <h3>Order Summary</h3>
          {items.map((item) => (
            <div className="summary-row" key={item.cartId}>
              <span>{item.name}</span>
              <span>${item.price.toFixed(2)}</span>
            </div>
          ))}
          <div className="summary-row total">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>

        <div className="order-summary" style={{ position: 'static' }}>
          <h3>Payment</h3>
          <p style={{ color: 'var(--text-dim)', fontSize: 14 }}>
            Razorpay test-mode checkout will process here. Click below to simulate a successful test payment.
          </p>
          <button className="btn btn-primary btn-block" disabled={placing} onClick={handlePlaceOrder}>
            {placing ? <span className="spinner" /> : `Pay $${total.toFixed(2)} (Test Mode)`}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;

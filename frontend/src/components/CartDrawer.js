import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const CartDrawer = () => {
  const { items, removeItem, total, isOpen, setIsOpen } = useCart();
  const navigate = useNavigate();

  if (!isOpen) return null;

  return (
    <>
      <div className="cart-overlay" onClick={() => setIsOpen(false)} />
      <div className="cart-drawer">
        <div className="cart-header">
          <h3 style={{ margin: 0 }}>Your Cart ({items.length})</h3>
          <button className="close-btn" onClick={() => setIsOpen(false)}>×</button>
        </div>

        <div className="cart-items">
          {items.length === 0 ? (
            <div className="empty-state">
              <img className="emoji" src="https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?auto=format&fit=crop&w=400&q=80" alt="" />
              Your cart is empty.
            </div>
          ) : (
            items.map((item) => (
              <div className="cart-item" key={item.cartId}>
                <img className="cart-item-photo" src={item.image} alt={item.name} />
                <div className="cart-item-info">
                  <div className="name">{item.name}</div>
                  <div className="details">{item.details}</div>
                  <div className="details" style={{ color: 'var(--accent)', fontWeight: 600, marginTop: 4 }}>
                    ${item.price.toFixed(2)}
                  </div>
                </div>
                <button className="cart-item-remove" onClick={() => removeItem(item.cartId)}>×</button>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="cart-footer">
            <div className="summary-row total">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <button
              className="btn btn-primary btn-block"
              style={{ marginTop: 14 }}
              onClick={() => {
                setIsOpen(false);
                navigate('/checkout');
              }}
            >
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;

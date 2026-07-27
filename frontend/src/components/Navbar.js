import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const { user, logout } = useAuth();
  const { items, setIsOpen } = useCart();

  const initials = user?.name
    ? user.name.split(' ').map((n) => n[0]).slice(0, 2).join('').toUpperCase()
    : '?';

  return (
    <nav className="navbar">
      <Link to={user?.role === 'admin' ? '/admin' : '/dashboard'} className="navbar-logo" style={{ color: 'inherit' }}>
        Slice<span className="dot">.</span>House
      </Link>

      <div className="navbar-right">
        {user?.role !== 'admin' && (
          <button className="navbar-cart-btn" onClick={() => setIsOpen(true)} aria-label="Open cart">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="9" cy="21" r="1" />
              <circle cx="19" cy="21" r="1" />
              <path d="M2.5 3h2l2.4 12.2a2 2 0 0 0 2 1.6h8.6a2 2 0 0 0 2-1.6L21 7H6" />
            </svg>
            {items.length > 0 && <span className="cart-count">{items.length}</span>}
          </button>
        )}

        <div className="navbar-user">
          <span className="avatar">{initials}</span>
          <span>{user?.name}</span>
        </div>

        <button className="btn btn-ghost" onClick={logout}>
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

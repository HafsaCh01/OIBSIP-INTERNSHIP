import { useState, useMemo } from 'react';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';
import Navbar from '../components/Navbar';
import CartDrawer from '../components/CartDrawer';
import PizzaBuilder from '../components/PizzaBuilder';
import OrderTracker from '../components/OrderTracker';
import { FEATURED_PIZZAS, CATEGORIES } from '../data/pizzaOptions';

const CAT_COLOR = {
  classic: 'var(--cat-classic)',
  meat: 'var(--cat-meat)',
  spicy: 'var(--cat-spicy)',
  veg: 'var(--cat-veg)',
  specialty: 'var(--cat-specialty)',
};

const TICKER_WORDS = [
  { text: 'Pizza Delivery', hot: false },
  { text: 'Fresh Ingredients', hot: true },
  { text: 'Fast & Hot', hot: false },
  { text: 'Build Your Own', hot: true },
  { text: '22 Recipes', hot: false },
  { text: 'Order In Seconds', hot: true },
];

const Dashboard = () => {
  const { user } = useAuth();
  const { addItem } = useCart();
  const [tab, setTab] = useState('menu');
  const [cat, setCat] = useState('all');

  const pizzas = useMemo(
    () => (cat === 'all' ? FEATURED_PIZZAS : FEATURED_PIZZAS.filter((p) => p.cat === cat)),
    [cat]
  );

  const heroPhoto = FEATURED_PIZZAS[0];
  const miniPhotos = FEATURED_PIZZAS.slice(1, 4);

  return (
    <div className="dash-page">
      <Navbar />
      <CartDrawer />

      <div className="dash-hero-banner">
        <div className="dash-hero-inner">
          <div>
           
            <h1>Hey {user?.name?.split(' ')[0]}, let's get you fed.</h1>
            <p>
              Order a fan-favorite in one tap, or build your own from scratch —
              fresh dough, real toppings, out the door in 15 minutes.
            </p>
            <div className="hero-cta-row">
              <button className="btn btn-primary" onClick={() => setTab('menu')}>
                Order Now
              </button>
              <button className="btn btn-hero-outline" onClick={() => setTab('build')}>
                Build Your Own
              </button>
            </div>
            <div className="hero-mini-photos">
              {miniPhotos.map((p) => (
                <img key={p.id} src={p.image} alt={p.name} />
              ))}
            </div>
          </div>

          <div className="hero-photo-wrap">
            <span className="hero-decor tomato" />
            <span className="hero-decor basil" />
            <span className="hero-decor crumb" />
            <div className="hero-badge">Fresh Today*</div>
            <div className="hero-photo-mask">
              <img src={heroPhoto.image} alt={heroPhoto.name} />
            </div>
          </div>
        </div>

        <div className="hero-wave">
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,30 C360,70 1080,-10 1440,30 L1440,60 L0,60 Z" fill="var(--cream)" />
          </svg>
        </div>
      </div>

      <div className="ticker-band">
        <div className="ticker-track">
          {[...TICKER_WORDS, ...TICKER_WORDS, ...TICKER_WORDS].map((w, i) => (
            <span key={i} className={w.hot ? 'hot' : ''}>{w.text}</span>
          ))}
        </div>
      </div>

      <div className="dash-tabs">
        <button className={`dash-tab ${tab === 'menu' ? 'active' : ''}`} onClick={() => setTab('menu')}>
          Menu
        </button>
        <button className={`dash-tab ${tab === 'build' ? 'active' : ''}`} onClick={() => setTab('build')}>
          Build Your Own
        </button>
        <button className={`dash-tab ${tab === 'orders' ? 'active' : ''}`} onClick={() => setTab('orders')}>
          My Orders
        </button>
      </div>

      <div className="dash-content">
        {tab === 'menu' && (
          <>
            <div className="section-heading">
              <h2>Discover Your Pizza</h2>
            </div>

            <div className="cat-filter">
              {CATEGORIES.map((c) => (
                <button
                  key={c.id}
                  className={`cat-chip ${cat === c.id ? 'active' : ''}`}
                  style={{ '--chip-color': CAT_COLOR[c.id] || 'var(--brand)' }}
                  onClick={() => setCat(c.id)}
                >
                  {c.id !== 'all' && <span className="dot" />}
                  {c.name}
                </button>
              ))}
            </div>

            <div className="pizza-grid">
              {pizzas.map((pizza) => (
                <div className="pizza-card" key={pizza.id}>
                  <div className="pizza-card-img">
                    <img src={pizza.image} alt={pizza.name} loading="lazy" />
                  </div>
                  <button
                    className="card-link-icon"
                    aria-label={`Add ${pizza.name}`}
                    onClick={() =>
                      addItem({
                        name: pizza.name,
                        details: 'Classic recipe',
                        price: pizza.price,
                        image: pizza.image,
                      })
                    }
                  >
                    ↗
                  </button>
                  <div className="pizza-card-body">
                    {pizza.tags.length > 0 && (
                      <div className="tag-row">
                        {pizza.tags.slice(0, 1).map((t) => (
                          <span className="tag" key={t}>{t}</span>
                        ))}
                      </div>
                    )}
                    <h3>{pizza.name}</h3>
                    <p>{pizza.desc}</p>
                    <div className="pizza-card-footer">
                      <span className="price-tag">${pizza.price.toFixed(2)}</span>
                      <span className="rating-pill">
                        <span className="star">★</span>{pizza.rating}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {tab === 'build' && <PizzaBuilder />}

        {tab === 'orders' && <OrderTracker />}
      </div>
    </div>
  );
};

export default Dashboard;

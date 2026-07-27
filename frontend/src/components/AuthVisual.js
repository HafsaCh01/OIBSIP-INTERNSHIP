const PHOTO = 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=80';

const AuthVisual = () => {
  return (
    <div className="auth-visual">
      <div className="auth-visual-photo-wrap">
        <span className="hero-decor tomato" />
        <span className="hero-decor basil" />
        <div className="hero-badge">Fresh Today*</div>
        <div className="auth-visual-mask">
          <img src={PHOTO} alt="Freshly baked pizza" />
        </div>
      </div>

      <span className="auth-visual-tag">Kitchen open now</span>
      <h2>Hot, fresh pizza — built exactly your way.</h2>
      <p>
        Pick your base, sauce, cheese, and toppings. Track every order live,
        from the kitchen to your doorstep.
      </p>
      <div className="auth-visual-stats">
        <div className="auth-visual-stat">
          <b>22+</b>
          <span>Pizzas</span>
        </div>
        <div className="auth-visual-stat">
          <b>20+</b>
          <span>Toppings</span>
        </div>
        <div className="auth-visual-stat">
          <b>15 min</b>
          <span>Avg. Prep</span>
        </div>
      </div>
    </div>
  );
};

export default AuthVisual;

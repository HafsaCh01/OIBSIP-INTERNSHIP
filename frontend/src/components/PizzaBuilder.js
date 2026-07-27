import { useState, useMemo } from 'react';
import { useCart } from '../context/CartContext';
import { BASES, SAUCES, CHEESES, VEGGIES, MEATS } from '../data/pizzaOptions';

const BASE_PRICE = 6.5;

const OptionChip = ({ option, selected, onClick, disabled }) => (
  <button
    type="button"
    className={`option-chip ${selected ? 'selected' : ''} ${disabled ? 'out-of-stock' : ''}`}
    onClick={() => !disabled && onClick(option.id)}
    disabled={disabled}
  >
    {selected && <span className="chip-check">✓</span>}
    <span className="chip-name">{option.name}</span>
    <span className="chip-price">{option.price > 0 ? `+$${option.price.toFixed(2)}` : 'Included'}</span>
  </button>
);

const PizzaBuilder = () => {
  const { addItem } = useCart();
  const [base, setBase] = useState(null);
  const [sauce, setSauce] = useState(null);
  const [cheese, setCheese] = useState(null);
  const [veggies, setVeggies] = useState([]);
  const [meats, setMeats] = useState([]);
  const [added, setAdded] = useState(false);

  const toggleVeggie = (id) =>
    setVeggies((prev) => (prev.includes(id) ? prev.filter((v) => v !== id) : [...prev, id]));

  const toggleMeat = (id) =>
    setMeats((prev) => (prev.includes(id) ? prev.filter((v) => v !== id) : [...prev, id]));

  const findPrice = (list, id) => list.find((o) => o.id === id)?.price || 0;

  const total = useMemo(() => {
    let t = BASE_PRICE;
    if (base) t += findPrice(BASES, base);
    if (sauce) t += findPrice(SAUCES, sauce);
    if (cheese) t += findPrice(CHEESES, cheese);
    veggies.forEach((v) => (t += findPrice(VEGGIES, v)));
    meats.forEach((m) => (t += findPrice(MEATS, m)));
    return t;
  }, [base, sauce, cheese, veggies, meats]);

  const isComplete = base && sauce && cheese;

  const summaryText = () => {
    const parts = [];
    if (base) parts.push(BASES.find((b) => b.id === base).name);
    if (sauce) parts.push(SAUCES.find((s) => s.id === sauce).name);
    if (cheese) parts.push(CHEESES.find((c) => c.id === cheese).name);
    if (veggies.length) parts.push(`${veggies.length} veggie(s)`);
    if (meats.length) parts.push(`${meats.length} meat(s)`);
    return parts.join(' · ') || 'Nothing selected yet';
  };

  const handleAddToCart = () => {
    addItem({
      name: 'Custom Pizza',
      details: summaryText(),
      price: total,
      image: 'https://images.unsplash.com/photo-1555072956-7758afb20e8f?auto=format&fit=crop&w=800&q=80',
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="builder-layout">
      <div>
        <div className="builder-step">
          <h3><span className="builder-step-num">1</span> Choose your base</h3>
          <p className="step-hint">Pick one crust style.</p>
          <div className="option-grid">
            {BASES.map((b) => (
              <OptionChip key={b.id} option={b} selected={base === b.id} onClick={setBase} />
            ))}
          </div>
        </div>

        <div className="builder-step">
          <h3><span className="builder-step-num">2</span> Choose your sauce</h3>
          <p className="step-hint">Pick one sauce.</p>
          <div className="option-grid">
            {SAUCES.map((s) => (
              <OptionChip key={s.id} option={s} selected={sauce === s.id} onClick={setSauce} />
            ))}
          </div>
        </div>

        <div className="builder-step">
          <h3><span className="builder-step-num">3</span> Choose your cheese</h3>
          <p className="step-hint">Pick one cheese type.</p>
          <div className="option-grid">
            {CHEESES.map((c) => (
              <OptionChip key={c.id} option={c} selected={cheese === c.id} onClick={setCheese} />
            ))}
          </div>
        </div>

        <div className="builder-step">
          <h3><span className="builder-step-num">4</span> Add veggies</h3>
          <p className="step-hint">Pick as many as you like (optional).</p>
          <div className="option-grid">
            {VEGGIES.map((v) => (
              <OptionChip key={v.id} option={v} selected={veggies.includes(v.id)} onClick={toggleVeggie} />
            ))}
          </div>
        </div>

        <div className="builder-step">
          <h3><span className="builder-step-num">5</span> Add meat</h3>
          <p className="step-hint">Optional — pick as many as you like.</p>
          <div className="option-grid">
            {MEATS.map((m) => (
              <OptionChip key={m.id} option={m} selected={meats.includes(m.id)} onClick={toggleMeat} />
            ))}
          </div>
        </div>
      </div>

      <div className="order-summary">
        <h3>Your Pizza</h3>

        {!base && !sauce && !cheese && veggies.length === 0 && meats.length === 0 ? (
          <div className="summary-empty">Start picking ingredients to build your pizza.</div>
        ) : (
          <>
            <div className="summary-row">
              <span>Base</span>
              <span>{base ? BASES.find((b) => b.id === base).name : '—'}</span>
            </div>
            <div className="summary-row">
              <span>Sauce</span>
              <span>{sauce ? SAUCES.find((s) => s.id === sauce).name : '—'}</span>
            </div>
            <div className="summary-row">
              <span>Cheese</span>
              <span>{cheese ? CHEESES.find((c) => c.id === cheese).name : '—'}</span>
            </div>
            <div className="summary-row">
              <span>Veggies</span>
              <span>{veggies.length || '—'}</span>
            </div>
            <div className="summary-row">
              <span>Meat</span>
              <span>{meats.length || '—'}</span>
            </div>
            <div className="summary-row total">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </>
        )}

        <button
          className="btn btn-primary btn-block"
          style={{ marginTop: 16 }}
          disabled={!isComplete}
          onClick={handleAddToCart}
        >
          {added ? 'Added to cart ✓' : isComplete ? 'Add to Cart' : 'Select base, sauce & cheese'}
        </button>
      </div>
    </div>
  );
};

export default PizzaBuilder;

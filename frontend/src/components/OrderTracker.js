const STEPS = ['Received', 'In Kitchen', 'Sent to Delivery', 'Delivered'];

const DEMO_ORDERS = [
  {
    id: 'ORD-10234',
    items: 'Pepperoni Feast, Custom Pizza (Thin Crust · BBQ · Cheddar)',
    price: 24.48,
    status: 'In Kitchen',
    placedAt: '10 mins ago',
  },
  {
    id: 'ORD-10198',
    items: 'Veggie Supreme',
    price: 9.99,
    status: 'Delivered',
    placedAt: 'Yesterday',
  },
];

const OrderTracker = () => {
  if (DEMO_ORDERS.length === 0) {
    return (
      <div className="empty-state">
        <img className="emoji" src="https://images.unsplash.com/photo-1571066811602-716837d681de?auto=format&fit=crop&w=400&q=80" alt="" />
        You haven't placed any orders yet.
      </div>
    );
  }

  return (
    <div>
      {DEMO_ORDERS.map((order) => {
        const currentIndex = STEPS.indexOf(order.status);
        return (
          <div className="order-track-card" key={order.id}>
            <div className="order-track-head">
              <div>
                <div className="oid">{order.id} · {order.placedAt}</div>
                <div style={{ fontSize: 14, marginTop: 4 }}>{order.items}</div>
              </div>
              <div className="price">${order.price.toFixed(2)}</div>
            </div>

            <div className="tracker">
              {STEPS.map((step, i) => (
                <div
                  key={step}
                  className={`tracker-step ${i < currentIndex ? 'done' : ''} ${i === currentIndex ? 'current' : ''}`}
                >
                  <div className="tracker-line" />
                  <div className="tracker-dot">{i < currentIndex ? '✓' : i + 1}</div>
                  <div className="tracker-label">{step}</div>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default OrderTracker;

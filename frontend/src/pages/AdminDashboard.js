import Navbar from '../components/Navbar';

const INVENTORY = [
  { name: 'Thin Crust Base', stock: 45, threshold: 20, category: 'Base' },
  { name: 'Classic Base', stock: 12, threshold: 20, category: 'Base' },
  { name: 'Tomato Sauce', stock: 60, threshold: 20, category: 'Sauce' },
  { name: 'Mozzarella', stock: 8, threshold: 20, category: 'Cheese' },
  { name: 'Pepperoni', stock: 30, threshold: 15, category: 'Meat' },
  { name: 'Bell Pepper', stock: 50, threshold: 15, category: 'Veggie' },
];

const ORDERS = [
  { id: 'ORD-10234', customer: 'Hafsa Shahzad', total: 24.48, status: 'In Kitchen' },
  { id: 'ORD-10233', customer: 'Ali Raza', total: 14.99, status: 'Received' },
  { id: 'ORD-10232', customer: 'Sara Khan', total: 32.00, status: 'Sent to Delivery' },
];

const AdminDashboard = () => {
  const lowStockCount = INVENTORY.filter((i) => i.stock < i.threshold).length;

  return (
    <div className="dash-page">
      <Navbar />
      <div className="dash-content" style={{ paddingTop: 40 }}>
        <h1 style={{ marginBottom: 4 }}>Admin Overview</h1>
        <p style={{ color: 'var(--text-dim)', marginBottom: 30 }}>
          Manage inventory and track live orders.
        </p>

        <div className="admin-stats-grid">
          <div className="stat-card">
            <div className="stat-label">Orders Today</div>
            <div className="stat-value">18</div>
          </div>
          <div className="stat-card">
            <div className="stat-label">Revenue Today</div>
            <div className="stat-value">$312</div>
          </div>
          <div className={`stat-card ${lowStockCount > 0 ? 'warn' : ''}`}>
            <div className="stat-label">Low Stock Items</div>
            <div className="stat-value">{lowStockCount}</div>
          </div>
          <div className="stat-card">
            <div className="stat-label">Active Deliveries</div>
            <div className="stat-value">3</div>
          </div>
        </div>

        <h2 style={{ fontSize: 19, marginBottom: 14 }}>Live Orders</h2>
        <table className="admin-table" style={{ marginBottom: 36 }}>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Total</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {ORDERS.map((o) => (
              <tr key={o.id}>
                <td>{o.id}</td>
                <td>{o.customer}</td>
                <td>${o.total.toFixed(2)}</td>
                <td>
                  <select className="status-select" defaultValue={o.status}>
                    <option>Received</option>
                    <option>In Kitchen</option>
                    <option>Sent to Delivery</option>
                    <option>Delivered</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <h2 style={{ fontSize: 19, marginBottom: 14 }}>Inventory</h2>
        <table className="admin-table">
          <thead>
            <tr>
              <th>Item</th>
              <th>Category</th>
              <th>Stock Level</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {INVENTORY.map((item) => {
              const low = item.stock < item.threshold;
              const pct = Math.min(100, (item.stock / (item.threshold * 2)) * 100);
              return (
                <tr key={item.name}>
                  <td>{item.name}</td>
                  <td>{item.category}</td>
                  <td>
                    <div className="stock-bar-track">
                      <div
                        className="stock-bar-fill"
                        style={{
                          width: `${pct}%`,
                          background: low ? 'var(--danger)' : 'var(--success)',
                        }}
                      />
                    </div>
                    <span style={{ fontSize: 12, color: 'var(--text-faint)' }}>{item.stock} units</span>
                  </td>
                  <td>
                    {low ? (
                      <span className="badge badge-kitchen">Low Stock</span>
                    ) : (
                      <span className="badge badge-delivered">Healthy</span>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;

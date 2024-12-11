import React, { useState } from 'react';

const AdminDashboard = () => {
  const [orders, setOrders] = useState(JSON.parse(localStorage.getItem('orders')) || []);

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <h2>Orders</h2>
      <ul>
        {orders.length === 0 ? (
          <p>No orders yet.</p>
        ) : (
          orders.map((order, index) => (
            <li key={index}>
              <h3>Order {index + 1}</h3>
              <ul>
                {order.items.map((item, idx) => (
                  <li key={idx}>{item.name} - ${item.price}</li>
                ))}
              </ul>
              <strong>Total: ${order.total}</strong>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default AdminDashboard;

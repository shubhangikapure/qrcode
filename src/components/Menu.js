import React, { useState } from 'react';
import MenuItem from './MenuItem';
import MenuData from '../services/MenuData';

const Menu = () => {
  const [order, setOrder] = useState([]);

  const handleAddToOrder = (item) => {
    setOrder([...order, item]);
  };

  const handlePlaceOrder = () => {
    alert("Order placed!");
    setOrder([]); // Clear order after placing
  };

  return (
    <div>
      <h1>Menu</h1>
      {MenuData.map((item) => (
        <MenuItem key={item.id} item={item} addToOrder={handleAddToOrder} />
      ))}
      <h2>Order Summary</h2>
      <ul>
        {order.map((item, index) => (
          <li key={index}>{item.name} - ${item.price}</li>
        ))}
      </ul>
      <button onClick={handlePlaceOrder} disabled={order.length === 0}>Place Order</button>
    </div>
  );
};

export default Menu;

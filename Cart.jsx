import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Cart() {
  const [cart, setCart] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/api/cart')
      .then(res => setCart(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cart && cart.items.length > 0 ? (
        <ul>
          {cart.items.map((item, index) => (
            <li key={index}>Product ID: {item.productId} x {item.quantity}</li>
          ))}
        </ul>
      ) : (
        <p>Cart is empty</p>
      )}
    </div>
  );
}


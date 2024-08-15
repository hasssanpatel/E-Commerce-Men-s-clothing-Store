import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import CartContext from './CartContext';
import './BuyNow.css';

const BuyNow = () => {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);
  const [paymentMethod, setPaymentMethod] = React.useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const totalPrice = cart.reduce((total, item) => total + parseFloat(item.price.replace('₹ ', '').replace(',', '')), 0);

  const handlePayment = () => {
    alert('Payment successful');
    clearCart();
    navigate('/'); // Navigate to the home page
  };

  return (
    <div className="buy-now-container">
      <h2 className="buy-now-title">Order Summary</h2>
      <ul className="cart-items-list">
        {cart.map(item => (
          <li key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} />
            <div>
              <h3>{item.name}</h3>
              <p className="price">{item.price}</p>
              <p className="discount">{item.discount}</p>
              <p className="shipping">{item.shipping}</p>
              <p className="brand">Brand: {item.brand}</p>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          </li>
        ))}
      </ul>
      <div className="total-price-container">
        <h3 className="total-price-label">Total Price:</h3>
        <p className="total-price-value">₹{totalPrice.toFixed(2)}</p>
      </div>
      <div className="payment-options">
        <h3>Select Payment Method:</h3>
        <label>
          <input 
            type="radio" 
            name="payment" 
            value="cash" 
            checked={paymentMethod === 'cash'}
            onChange={(e) => setPaymentMethod(e.target.value)}
          /> Cash
        </label>
        <label>
          <input 
            type="radio" 
            name="payment" 
            value="online" 
            checked={paymentMethod === 'online'}
            onChange={(e) => setPaymentMethod(e.target.value)}
          /> Online Payment
        </label>
      </div>
      <button className="checkout-button" onClick={handlePayment}>Payment</button>
    </div>
  );
};

export default BuyNow;

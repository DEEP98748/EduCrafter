import React, { useState } from 'react';
import './Payment.css';

const Payment = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  const handlePaymentSubmit = (event) => {
    event.preventDefault();
    // Implement your payment processing logic here (e.g., calling an API)
    // For simplicity, we'll just log the form data
    console.log('Card Number:', cardNumber);
    console.log('Expiry Date:', expiryDate);
    console.log('CVV:', cvv);
  };

  return (
    <div className="payment-container">
      <h2>Payment Details</h2>
      <form onSubmit={handlePaymentSubmit}>
        <label htmlFor="cardNumber">Card Number</label>
        <input
          type="text"
          id="cardNumber"
          placeholder="1234 5678 9012 3456"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
        />
        <label htmlFor="expiryDate">Expiry Date</label>
        <input
          type="text"
          id="expiryDate"
          placeholder="MM/YY"
          value={expiryDate}
          onChange={(e) => setExpiryDate(e.target.value)}
        />
        <label htmlFor="cvv">CVV</label>
        <input
          type="text"
          id="cvv"
          placeholder="123"
          value={cvv}
          onChange={(e) => setCvv(e.target.value)}
        />
        <button type="submit">Pay Now</button>
      </form>
    </div>
  );
};

export default Payment;

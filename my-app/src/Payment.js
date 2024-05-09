import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Payment.css';

const Payment = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [paymentDetails, setPaymentDetails] = useState(null);
   const navigate = useNavigate();

  useEffect(() => {
    // Fetch payment details on component mount
    fetchAllPayments();
  }, []);

  const fetchAllPayments = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/payments/calling');
      setPaymentDetails(response.data);
    } catch (error) {
      console.error('Error fetching payments:', error.response ? error.response.data : error.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Submit payment details
      const response = await axios.post('http://localhost:8080/api/payments/save', {
        cardNumber,
        expiry,
        cvv,
        name,
        amount: parseFloat(amount),
      });

      console.log('Payment successful:', response.data);

      // Fetch payment details again after a successful payment
      fetchAllPayments();

      // Display the payment details popup
      setPaymentDetails(response.data);
      setShowPopup(true);

      // Reset the form values
      setCardNumber('');
      setExpiry('');
      setCvv('');
      setName('');
      setAmount('');
    } catch (error) {
      console.error('Error submitting payment:', error.response ? error.response.data : error.message);
      setErrorMessage('Payment failed. Please check your details and try again.');
    }
  };

  const handleClose = () => {
    // Close the popup
    setShowPopup(false);

    // Redirect to the admin dashboard
    navigate('/admin-dashboard');
  };

  return (
    <div className="payment-form-container">
      <h2 className="payment-form-title">Payment Gateway</h2>
      <form onSubmit={handleSubmit}>
        <label className="payment-form-label">
          Card Number:
          <input
            type="text"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            className="payment-form-input"
            placeholder="Card Number"
            required
          />
        </label>

        <label className="payment-form-label">
          Expiry Date:
          <input
            type="text"
            value={expiry}
            onChange={(e) => setExpiry(e.target.value)}
            className="payment-form-input"
            placeholder="Expiry Date (MMYY)"
            required
          />
        </label>

        <label className="payment-form-label">
          CVV:
          <input
            type="text"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            className="payment-form-input"
            placeholder="CVV"
            required
          />
        </label>

        <label className="payment-form-label">
          Cardholder Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="payment-form-input"
            placeholder="Cardholder Name"
            required
          />
        </label>

        <label className="payment-form-label">
          Amount:
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="payment-form-input"
            placeholder="Amount"
            min="0"
            required
          />
        </label>

        {errorMessage && <p className="payment-form-error-message">{errorMessage}</p>}
        <button type="submit" className="payment-form-button">
          Pay Now
        </button>
      </form>

      {showPopup && paymentDetails && (
        <div className="payment-popup">
          <p className="payment-popup-message">Payment successful!</p>
         
          <button onClick={handleClose}>
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default Payment;

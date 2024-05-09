import React, { useState } from 'react';
import processPayment from './api'; // Import the function for making POST requests

const PaymentComponent = () => {
  const [paymentIntentId, setPaymentIntentId] = useState(null);
  const [error, setError] = useState(null);

  const handlePayment = async () => {
    try {
      // Create a payment request object (modify as per your requirements)
      const paymentRequest = {
        currency: 'usd',
        amount: 1000, // Amount in cents
        // Add more fields if required
      };

      // Make the POST request to process the payment
      const intentId = await processPayment(paymentRequest);
      setPaymentIntentId(intentId);
      setError(null);
    } catch (error) {
      setError('Error processing payment. Please try again later.');
      setPaymentIntentId(null);
    }
  };

  return (
    <div>
      <button onClick={handlePayment}>Process Payment</button>
      {paymentIntentId && <p>Payment Intent ID: {paymentIntentId}</p>}
      {error && <p>{error}</p>}
    </div>
  );
};

export default PaymentComponent;

import React, { useState } from 'react';
import axios from 'axios';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import './CheckoutFor.css';

const CheckoutFor = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [paymentError, setPaymentError] = useState(null);
  const [paymentSuccess, setPaymentSuccess] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    try {
      const { data } = await axios.post('YOUR_BACKEND_URL_HERE', {
        amount: 1000,
        currency: 'usd',
      });

      const result = await stripe.confirmCardPayment(data.clientSecret, {
        payment_method: {
          card: cardElement,
        },
      });

      if (result.error) {
        setPaymentError(result.error.message);
        setPaymentSuccess(null);
      } else {
        setPaymentSuccess('Payment successful!');
        setPaymentError(null);
      }
    } catch (error) {
      setPaymentError(error.message);
      setPaymentSuccess(null);
    }
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <div className="card-element-container">
        <CardElement className="card-element" />
      </div>
      <button className="submit-button" type="submit" disabled={!stripe}>
        Pay
      </button>
      {paymentError && <div className="error-message">{paymentError}</div>}
      {paymentSuccess && <div className="success-message">{paymentSuccess}</div>}
    </form>
  );
};

export default CheckoutFor;

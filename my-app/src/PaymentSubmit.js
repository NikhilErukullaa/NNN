// App.js

import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PaymentForm from './PaymentForm';

const stripePromise = loadStripe('your_stripe_public_key');

const PaymentSubmit = () => {
  const handlePayment = async (paymentMethodId) => {
    // Send paymentMethodId to your backend to process the payment
    const response = await fetch('http://localhost:8080/process-payment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ paymentMethodId }),
    });

    if (response.ok) {
      console.log('Payment successful');
    } else {
      console.error('Payment failed');
    }
  };

  return (
    <Elements stripe={stripePromise}>
      <div className="App">
        <PaymentForm handlePayment={handlePayment} />
      </div>
    </Elements>
  );
};

export default PaymentSubmit;

import React from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios';
import './PaymentForm.css'; 

const PaymentForm = ({ handlePayment }) => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    try {
      const { paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card: cardElement,
      });

      if (!paymentMethod) {
        throw new Error('No payment method available');
      }

      // Send payment method details to backend
      const response = await axios.post('http://localhost:8080/process-payment', {
        paymentMethodId: paymentMethod.id,
      });

      handlePayment(response.data); // Handle payment success in parent component
    } catch (error) {
      console.error('Payment failed:', error);
    }
  };

  return (
    <form className="payment-form-container" onSubmit={handleSubmit}>
      <CardElement className="payment-card-element" />
      <button className="payment-submit-button" type="submit" disabled={!stripe}>Pay</button>
    </form>
  );
};

export default PaymentForm;

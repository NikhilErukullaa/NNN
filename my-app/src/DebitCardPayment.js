import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';

function DebitCardPayment() {
    const navigate = useNavigate();
    const [transactionId, setTransactionId] = useState('');
  
    const handlePayment = () => {
      // Process payment logic goes here (simulate with setTimeout)
      setTimeout(() => {
        const txnId = generateTransactionId(); // Simulate transaction ID generation
        setTransactionId(txnId);
        navigate(`/acknowledgment/${txnId}`);
      }, 2000); // Simulate payment processing time
    };
  
    const generateTransactionId = () => {
      // Generate a random transaction ID (not actual implementation)
      return Math.random().toString(36).substring(7);
    };
  
    return (
      <div>
        <h2>Debit Card Payment</h2>
        <button onClick={handlePayment}>Proceed with Debit Card Payment</button>
        {transactionId && <p>Transaction ID: {transactionId}</p>}
      </div>
    );
  }
  
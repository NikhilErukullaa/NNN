import axios from 'axios';

// Define the URL of your backend server
const BASE_URL = 'http://localhost:8080'; // Change this to your actual backend URL

// Function to make a POST request to the /process-payment endpoint
const processPayment = async (paymentRequest) => {
  try {
    const response = await axios.post(`${BASE_URL}/process-payment`, paymentRequest);
    return response.data; // Assuming the response contains the payment intent ID
  } catch (error) {
    console.error('Error processing payment:', error);
    throw error; // Rethrow the error for handling in the calling component
  }
};

export default processPayment;

import React from 'react';
import axios from 'axios';
import { toast } from 'react-toastify'; // Import toast from react-toastify package
import 'react-toastify/dist/ReactToastify.css'; // Import CSS for react-toastify
import './CashTransactionForm.css';

class CashTransactionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: 0,
      currency: 'INR', 
      course: this.props.match.params.mainOption + ' - ' + this.props.match.params.subOption, // Get course from URL params
      gst: 0,
      grandTotal: 0
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/cash', this.state);
      if (response.status === 200) {
        console.log('Transaction successful. Acknowledgment number:', response.data);
        // Show a success message using react-toastify
        toast.success('Payment successful!');
        // Optionally, you can reset the form here
        this.setState({
          amount: 0,
          course: ''
        });
      } else {
        console.error('Transaction failed.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  render() {
    return (
      <form className="cash-transaction-form-container" onSubmit={this.handleSubmit}>
        <label className="cash-transaction-form-label">
          Amount:
          <input
            className="cash-transaction-form-input"
            type="number"
            name="amount"
            value={this.state.amount}
            onChange={this.handleChange}
          />
        </label>
        {/* Other form fields */}
        <button className="cash-transaction-form-button" type="submit">Submit</button>
      </form>
    );
  }
}

export default CashTransactionForm;

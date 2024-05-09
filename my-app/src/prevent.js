import { Link, useNavigate } from 'react-router-dom';

function UserRegistration() {
  const navigate = useNavigate();
  // Your existing code...

  const save = async (event) => {
    event.preventDefault();

    if (validateForm()) {
      try {
        // Your existing code...
        
        // Navigate to CashTransactionForm with selected course information as query parameter
        navigate(`/cash-transaction-form?course=${selectedMainOption}-${selectedSubOption}`);
      } catch (err) {
        alert('User Registration Failed');
      }
    } else {
      alert('Please fill in all required fields correctly');
    }
  };

  // Your existing code...
}

  
// import OtpValidation from './OtpValidation';
// import LandingPage from './LandingPage';
// import LoginUser from './LoginUser';
// import LoginTutor from './LoginTutor';
// import LoginAdmin from './LoginAdmin';
// import Payment from './Payment';
// import PaymentSubmit from './PaymentSubmit';
// import AddNewTutor from './AddNewTutor';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import CashTransactionForm from './CashTransactionForm';
import 'react-toastify/dist/ReactToastify.css';
import UserRegistration from './UserRegistration';





const stripePromise = loadStripe('pk_live_51OvwCGSJFYHf9rOljtkrlndA0xdBn22Ts6gYEIzXfKvhE4RRC5OM7wlV5P1qOhIYBRj1hks8TQNmU5zBiUnsvQlh00u1ZyjTzx');


// function App() {
//   return (
   
//   <>
 



//    <BrowserRouter>
//     <Routes>

   
//     <Route path='/' element={<CashTransactionForm/>}></Route>

    
          
//            {/* <Route path='/PaymentSubmit' element={<PaymentSubmit/>}></Route> */}
//           {/* < Route path='/' element ={<OtpValidation/>}/> */}
//           {/* <Route path='/LoginUser' element={<LoginUser/>}></Route>
//           <Route path='/LoginTutor' element={<LoginTutor/>}></Route>
//           <Route path='/LoginAdmin' element={<LoginAdmin/>}></Route> */}


//   </Routes> 
//     </BrowserRouter>
    
//   </>
    
//   );
// }

// export default App;
    


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/user-registration" component={UserRegistration} />
        <Route path="/cash-transaction-form/:mainOption/:subOption" component={CashTransactionForm} />
        {/* Other routes */}
      </Switch>
    </Router>
  );
}




export default App;
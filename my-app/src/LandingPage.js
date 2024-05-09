// // LandingPage.js
// import React from 'react';
// import { Link } from 'react-router-dom';

// function LandingPage() {
//   return (
//     <div>
//       <h1>Welcome to Our Platform</h1>
//       <div>
//         <Link to="/LoginUser">
//           <img src="https://th.bing.com/th/id/OIP.7DgHAcSjuJelJZ7USm_mKwHaEK?w=297&h=180&c=7&r=0&o=5&pid=1.7" alt="User" onClick={() => console.log("User image clicked")} />
//         </Link>
//         <Link to="/LoginTutor">
//           <img src="https://th.bing.com/th/id/OIP.ox-kyPMah702aGrV9sRHiwHaE8?w=239&h=180&c=7&r=0&o=5&pid=1.7" alt="Tutor" onClick={() => console.log("Tutor image clicked")} />
//         </Link>
//         <Link to="/login/admin">
//           <img src="https://th.bing.com/th/id/OIP.ojEtL_OHhQxE30fGSTxYSQHaE5?w=251&h=180&c=7&r=0&o=5&pid=1.7" alt="Admin" onClick={() => console.log("Admin image clicked")} />
//         </Link>
//       </div>
//     </div>
//   );
// }

// export default LandingPage;
// LandingPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css'; // Import the CSS file

function LandingPage() {
  return (
    <div className="container">
      <h1>Welcome to Our Platform</h1>
      <div className="image-container">
        <Link to="/LoginUser" className="image-link">
          <img src="https://th.bing.com/th/id/OIP.7DgHAcSjuJelJZ7USm_mKwHaEK?w=297&h=180&c=7&r=0&o=5&pid=1.7" alt="User" className="image" onClick={() => console.log("User image clicked")} />
          <div className="image-title">User</div>
        </Link>
        <Link to="/LoginTutor" className="image-link">
          <img src="https://th.bing.com/th/id/OIP.ox-kyPMah702aGrV9sRHiwHaE8?w=239&h=180&c=7&r=0&o=5&pid=1.7" alt="Tutor" className="image" onClick={() => console.log("Tutor image clicked")} />
          <div className="image-title">Tutor</div>
        </Link>
        <Link to="/LoginAdmin" className="image-link">
          <img src="https://th.bing.com/th/id/OIP.ojEtL_OHhQxE30fGSTxYSQHaE5?w=251&h=180&c=7&r=0&o=5&pid=1.7" alt="Admin" className="image" onClick={() => console.log("Admin image clicked")} />
          <div className="image-title">Admin</div>
        </Link>
      </div>
    </div>
  );
}

export default LandingPage;


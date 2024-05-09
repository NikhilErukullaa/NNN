import React from 'react';

const Home = () => {
  return (
    <div>
      {/* First Half: Image */}
      <div style={{ height: '50vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <img
          src="https://cdn.educba.com/academy/wp-content/uploads/2020/04/Financial-Institution.jpg" // Replace with your image URL
          alt="Institution Image"
          style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'cover' }}
        />
      </div>

      {/* Second Half: Institution Details */}
      <div style={{ textAlign: 'center', padding: '20px' }}>
        <h2>Institution Name</h2>
        <p>Address: 123 Street, City, Country</p>
        <p>Phone: +1 234 567 890</p>
        <p>Email: info@example.com</p>
        {/* Add more details as needed */}
      </div>
    </div>
  );
};

export default Home;

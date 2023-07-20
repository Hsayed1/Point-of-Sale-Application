import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  const handleMenuClick = () => {
    navigate('/Menu');
  };

  const handleOrderClick = () => {
    navigate('/Orders');
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        textAlign: 'center',
        background: '#f2f2f2',
      }}
    >
      <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>
        Welcome to the Home Page
      </h1>
      <div>
        <button
          style={{
            padding: '1rem 2rem',
            fontSize: '1.2rem',
            margin: '0.5rem',
            borderRadius: '4px',
            background: '#008CBA',
            color: 'white',
            border: 'none',
            cursor: 'pointer',
          }}
          onClick={handleMenuClick}
        >
          Menu
        </button>
        <button
          style={{
            padding: '1rem 2rem',
            fontSize: '1.2rem',
            margin: '0.5rem',
            borderRadius: '4px',
            background: '#4CAF50',
            color: 'white',
            border: 'none',
            cursor: 'pointer',
          }}
          onClick={handleOrderClick}
        >
          Orders
        </button>
      </div>
    </div>
  );
};

export default HomePage;

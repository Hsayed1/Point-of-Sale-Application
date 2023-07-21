import React, { useState } from 'react';

const QuantityButton = () => {
  const [count, setCount] = useState(1);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount((prevCount) => prevCount - 1);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ fontSize: '25px', marginBottom: '8px', textAlign: 'center' }}>Quantity</div>
      <button
        style={{
          width: '300px',
          height: '60px',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '12px',
          border: '1px solid #ccc',
          borderRadius: '8px',
          fontSize: '30px',
          cursor: 'pointer',
          background: 'white', 
        }}
      >
        <span
          onClick={handleDecrement}
          style={{
            color: 'red', 
            marginRight: '8px',
            cursor: 'pointer',
          }}
        >
          -
        </span>
        <span>{count}</span>
        <span
          onClick={handleIncrement}
          style={{
            color: 'green',
            marginLeft: '8px',
            cursor: 'pointer',
          }}
        >
          +
        </span>
      </button>
    </div>
  );
};

export default QuantityButton;

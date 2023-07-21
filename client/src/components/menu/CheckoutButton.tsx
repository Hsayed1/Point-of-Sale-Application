import React, { useState } from 'react';
import CartModal from './CartModal'; 

type CheckoutButtonProps = {
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

const CheckoutButton: React.FC<CheckoutButtonProps> = ({ onClick }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCheckout = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    
    if (onClick) {
      onClick(event);
    }

    
    setIsModalOpen(true);
  };

  return (
    <>
      <button
        style={{
          width: '200px',
          height: '50px',
          backgroundColor: 'green',
          color: 'white',
          fontSize: '20px',
          borderRadius: '8px',
          cursor: 'pointer',
        }}
        onClick={handleCheckout} 
      >
        Checkout
      </button>

      {/* Render the Modal component with isOpen and onClose props */}
      <CartModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default CheckoutButton;

import React, { useState } from 'react';

type AddButtonProps = {
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  onCloseMenuModal: () => void; // New prop to close the MenuModal
};

const AddButton: React.FC<AddButtonProps> = ({ onClick, onCloseMenuModal }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCheckout = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (onClick) {
      onClick(event);
    }
    
    setIsModalOpen(true);
  };

  const handleAddToCart = () => {
    // Close the MenuModal when the "Add to Cart" button is clicked
    onCloseMenuModal();
  };

  return (
    <>
      {/* Blue Add to Cart button */}
      <button
        style={{
          width: '200px',
          height: '50px',
          backgroundColor: 'blue',
          color: 'white',
          fontSize: '20px',
          borderRadius: '8px',
          cursor: 'pointer',
          marginTop: '5px',
        }}
        onClick={handleAddToCart}
      >
        Add to Cart
      </button>
    </>
  );
};

export default AddButton;

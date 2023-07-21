
import React from 'react';

type CartModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const CartModal: React.FC<CartModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="cart-modal-overlay">
      <div className="cart-modal-content">
        <h2>Cart Modal</h2>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default CartModal; 

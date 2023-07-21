import React from 'react';

type MenuModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const MenuModal: React.FC<MenuModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="menu-modal-overlay">
      <div className="menu-modal-content">
        
        <h2>Menu Modal</h2>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default MenuModal; 

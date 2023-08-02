import React from 'react';
import QuantityButton from './QuantityButton';
import AddButton from './AddButton'; // Assuming the component name is 'AddButton'

type MenuModalProps = {
  isOpen: boolean;
  onClose: () => void;
  modifierListId?: string;
};

const MenuModal: React.FC<MenuModalProps> = ({ isOpen, onClose }) => {
  const modalStyle: React.CSSProperties = {
    display: isOpen ? 'block' : 'none',
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '400px',
    height: 'auto',
    backgroundColor: '#fff',
    borderRadius: '4px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
    zIndex: 1000,
    padding: '20px',
  };

  const contentStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
  };

  const buttonSpacingStyle: React.CSSProperties = {
    marginTop: '20px', // Adjust the spacing as needed
  };

  const overlayStyle: React.CSSProperties = {
    display: isOpen ? 'block' : 'none',
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 999,
  };

  const handleCloseMenuModal = () => {
    onClose(); // Call the onClose function to close the MenuModal
  };

  return (
    <>
      <div style={modalStyle}>
        <h2></h2>
        <div style={contentStyle}>
          <QuantityButton />
          <div style={buttonSpacingStyle} />
          <AddButton onCloseMenuModal={handleCloseMenuModal} /> {/* Pass onCloseMenuModal prop */}
        </div>

      </div>
      <div style={overlayStyle} onClick={onClose}></div>
    </>
  );
};

export default MenuModal;

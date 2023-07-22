import React, { useState } from 'react';
import MenuModal from './MenuModal';

type ProductButtonProps = {
  productName: string;
  productPhotoUrl?: string;
};

const ProductButton: React.FC<ProductButtonProps> = ({ productName, productPhotoUrl }) => {
  const [isMenuModalOpen, setIsMenuModalOpen] = useState(false);

  const handleProductButtonClick = () => {
    setIsMenuModalOpen(true);
  };

  const handleMenuModalClose = () => {
    setIsMenuModalOpen(false);
  };

  return (
    <>
      <button
        style={{
          width: '200px',
          height: '200px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'center',
          position: 'relative',
          backgroundColor: '#fff',
          cursor: 'pointer',
        }}
        onClick={handleProductButtonClick}
      >
        <div style={{ width: '100%', height: '75%', overflow: 'hidden', borderBottom: '2px solid #ccc' }}>
          {productPhotoUrl && (
            <img
              src={productPhotoUrl}
              alt={productName}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          )}
        </div>
        <div
          className="product-name"
          style={{
            width: '100%',
            height: '25%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#008000',
            position: 'absolute',
            bottom: '0',
            left: '0',
          }}
        >
          {productName}
        </div>
      </button>

      {/* Render the MenuModal with isOpen and onClose props */}
      {isMenuModalOpen && <MenuModal isOpen={isMenuModalOpen} onClose={handleMenuModalClose} />}
    </>
  );
};

export default ProductButton;

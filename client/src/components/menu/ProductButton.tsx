import React, { useState } from "react";
import MenuModal from "./MenuModal";
import "./Styles/ProductButton.css";

type ProductButtonProps = {
  productName: string;
  productPhotoUrl?: string;
  modifierListId?: string;
  onAddToCart: (item: { name: string; quantity: number }) => void; // New prop for the callback function
};

const ProductButton: React.FC<ProductButtonProps> = ({
  productName,
  productPhotoUrl,
  modifierListId,
  onAddToCart,
}) => {
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
        className="productButtonContainer"
        onClick={handleProductButtonClick}
      >
        <div className="productImageContainer">
          {productPhotoUrl && (
            <img
              src={productPhotoUrl}
              alt={productName}
              className="productImage"
            />
          )}
        </div>
        <div className="productNameContainer">{productName}</div>
      </button>

      {isMenuModalOpen && (
        <MenuModal
          isOpen={isMenuModalOpen}
          onClose={handleMenuModalClose}
          productName={productName}
          modifierListId={modifierListId}
          onAddToCart={onAddToCart}
        />
      )}
    </>
  );
};

export default ProductButton;

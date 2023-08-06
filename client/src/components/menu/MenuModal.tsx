import React, { useEffect } from "react";
import ItemLabel from "./ItemLabel";
import { ALIGN_LEFT } from "@blueprintjs/core/lib/esm/common/classes";
import { useState } from "react";
import "./Styles/MenuModal.css";

type MenuModalProps = {
  isOpen: boolean;
  onClose: () => void;
  productName: string;
  modifierListId?: string;
  onAddToCart: (item: { name: string; quantity: number }) => void; // Updated prop for the callback function
};

interface DataObject {
  _id: { $oid: string };
  catalog: {
    objects: Array<any>;
  };
  merchant_id: string;
}

const MenuModal: React.FC<MenuModalProps> = ({
  isOpen,
  onClose,
  productName,
  onAddToCart,
  modifierListId,
}) => {
  const handleAddToCart = () => {
    // Call the onAddToCart callback function and pass the selected item details with quantity
    onAddToCart({ name: productName, quantity: quantity });
    //close modal
    onClose();
  };

  const [quantity, setQuantity] = useState(1);
  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  return (
    <>
      <div className="modalStyle">
        <div className="contentStyle">
          <div className="itemInfoStyle">
            <div className="itemNameStyle">{productName}</div>
          </div>

          <div className="quantityContainer">
            <span onClick={handleDecrement} className="decrementButton">
              -
            </span>
            <span>{quantity}</span>
            <span onClick={handleIncrement} className="incrementButton">
              +
            </span>
          </div>
          <div className="buttonSpacingStyle" />

          {/* Inline "Add to Cart" button */}
          <button className="addToCartButton" onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
      </div>
      <div className="overlayStyle" onClick={onClose}></div>
    </>
  );
};

export default MenuModal;

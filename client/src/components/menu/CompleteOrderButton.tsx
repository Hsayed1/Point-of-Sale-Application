import React from "react";
import { useNavigate } from "react-router-dom";
import "./Styles/CompleteOrderButton.css";

type CompleteOrderButtonProps = {
  cartItems: { name: string; quantity: number }[];
};

const CompleteOrderButton: React.FC<CompleteOrderButtonProps> = ({
  cartItems,
}) => {
  const navigate = useNavigate();

  const handleOrderClick = () => {
    // Navigate to the orders page and pass the cart items in the URL parameters
    navigate(`/Orders?items=${encodeURIComponent(JSON.stringify(cartItems))}`);
  };

  return (
    <>
      <button
        className="completeOrderButtonContainer"
        onClick={handleOrderClick}
      >
        Complete order
      </button>
    </>
  );
};

export default CompleteOrderButton;

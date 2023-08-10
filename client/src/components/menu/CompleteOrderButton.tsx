import React from "react";
import "./Styles/CompleteOrderButton.css";
import { sendOrder } from "../../utils/data-utils";

type CompleteOrderButtonProps = {
  token: string;
  cartItems: { name: string; quantity: number }[];
  onOrderComplete: () => void; // Callback to notify MenuPage about order completion
};

const CompleteOrderButton: React.FC<CompleteOrderButtonProps> = ({
  token,
  cartItems,
  onOrderComplete,
}) => {

  const handleOrderClick = async () => {
    sendOrder(token, cartItems)
      .then(() => {
        onOrderComplete();
      })
      .catch((err) => {
        console.log(err);
      } );
  };

  return (
    <>
      <button className="completeOrderButtonContainer" onClick={handleOrderClick}>
        Complete order
      </button>
    </>
  );
};

export default CompleteOrderButton;

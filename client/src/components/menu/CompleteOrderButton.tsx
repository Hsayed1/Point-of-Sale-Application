import React from "react";
import "./Styles/CompleteOrderButton.css";

type CompleteOrderButtonProps = {
  cartItems: { name: string; quantity: number }[];
  onOrderComplete: () => void; // Callback to notify MenuPage about order completion
};

const CompleteOrderButton: React.FC<CompleteOrderButtonProps> = ({
  cartItems,
  onOrderComplete,
}) => {

  const handleOrderClick = async () => {
    try {
      const response = await fetch("http://localhost:3000/Orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cartItems),
      });

      if (response.ok) {
        console.log("order was sent")
        onOrderComplete(); // Notify MenuPage about order completion
      } else {
        console.error("Error submitting order");
      }
    } catch (error) {
      console.error("Error submitting order:", error);
    }
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

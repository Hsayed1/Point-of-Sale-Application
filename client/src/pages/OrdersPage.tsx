import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import "./Styles/MenuPage.css";
import "./Styles/OrdersPage.css";

type OrdersProps = {
  token: string;
};

type CartItem = {
  name: string;
  quantity: number;
};

const OrdersPage: React.FC<OrdersProps> = ({ token }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const queryParams = new URLSearchParams(location.search);
  const items = queryParams.get("items");
  const initialCartItems: CartItem[] = items
    ? JSON.parse(decodeURIComponent(items))
    : [];

  // Group the initialCartItems into an array of orders
  const initialOrders: CartItem[][] = initialCartItems.map((item) => [item]);

  const [orders, setOrders] = useState<CartItem[][]>(initialOrders);

  // Function to remove an order from the cart
  const handleRemoveOrder = (index: number) => {
    const newOrders = [...orders];
    newOrders.splice(index, 1);
    setOrders(newOrders);
    // You can perform any backend updates here if needed
  };

  // Function to navigate back to the menu page
  const handleBackToMenu = () => {
    navigate("/menu");
  };

  // Define a separate function to render the cart items as fragments
  const renderCartItems = (order: CartItem[]) => {
    return order.map((item: CartItem, itemIndex: number) => (
      <React.Fragment key={itemIndex}>
        <p>
          {item.quantity} x {item.name}
        </p>
      </React.Fragment>
    ));
  };

  return (
    <div className="pageContainerStyle">
      <div className="ordersContainerStyle">
        <h2>Orders Page</h2>
        <div className="orderContainerStyle">
          {orders.map((order: CartItem[], orderIndex: number) => (
            <div key={orderIndex}>
              {renderCartItems(order)}
              <button
                className="orderButtonStyle"
                onClick={() => handleRemoveOrder(orderIndex)}
              >
                Mark as done
              </button>
            </div>
          ))}
        </div>
      </div>
      <button
        className="orderButtonStyle"
        style={{ position: "fixed", bottom: "20px" }}
        onClick={handleBackToMenu}
      >
        Back to Menu
      </button>
    </div>
  );
};

export default OrdersPage;

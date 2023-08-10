import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getOrders, markOrderComplete } from "../utils/data-utils";

import "./Styles/MenuPage.css";
import "./Styles/OrdersPage.css";

type OrdersProps = {
  token: string;
};

type CartItem = {
  name: string;
  quantity: number;
};

type OrderItem = {
  items: CartItem[];
  completed: boolean;
  merchant_id: string;
  order_id: string;
  _id: string;
  timeCreated: string;
}

const OrdersPage: React.FC<OrdersProps> = ({ token }) => {
  const location = useLocation();
  const navigate = useNavigate();

  
  const [orders, setOrders] = useState<OrderItem[]>([]);

  useEffect(() => { 
    setInterval(() => {
      getOrders(token).then((o) => {
        console.log('orders: ', o);
        setOrders(o);
      });
    }, 3000);
  } , []);

  // Function to remove an order from the cart
  const handleRemoveOrder = (index: number) => {
    markOrderComplete(token, orders[index].order_id)
      .then(() => {
        console.log('order marked as complete');
        const newOrders = [...orders];
      newOrders.splice(index, 1);
      setOrders(newOrders);
      })
      .catch((err) => {
        console.log(err);
      });
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
          {orders.map((order: OrderItem, orderIndex: number) => (
            <div key={orderIndex}>
              {renderCartItems(order.items)}
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

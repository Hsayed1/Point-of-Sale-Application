import React, { useEffect, useState } from "react";
import ProductButton from "../components/menu/ProductButton";
import { Colors, Overlay } from "@blueprintjs/core";
import MenuModal from "../components/menu/MenuModal";
import { useNavigate } from "react-router-dom";
import CompleteOrderButton from "../components/menu/CompleteOrderButton";
import { getMenu } from "../utils/data-utils";
import MenuItemCard from "../components/menu/MenuItemCard";
import { Item, MenuItem } from "../utils/store";
import "./Styles/MenuPage.css";


type MenuProps = {
  token: string;
};

//interface to represent dataobject for local testing
interface DataObject {
  _id: { $oid: string };
  catalog: {
    objects: Array<any>;
  };
  merchant_id: string;
}

const MenuPage = ({ token }: MenuProps) => {
  //data array to hold json data for local testing
  const [data, setData] = useState<DataObject | null>(null);

  const [cartItems, setCartItems] = useState<
    { name: string; quantity: number }[]
  >([]); // Array to hold cart items

  useEffect(() => {
    fetch("/StoreData.json")
      .then((response) => response.json())
      .then((jsonData) => setData(jsonData))
      .catch((error) => console.error("Error fetching data:", error));
    getMenu(token).then((m) => {
      //setMenu(m);
    });
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  const isItem = (item: MenuItem): item is Item => item.type === "ITEM";

  const renderItem = (item: MenuItem) => {
    switch (item.type) {
      case "ITEM":
        return <MenuItemCard item={item} />;
      case "MODIFIER_LIST":
        return <div>Modifier list</div>;
    }
  };

  // Function to handle adding items to the cart
  const handleAddToCart = (item: { name: string; quantity: number }) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };
  // Function to handle removing an item from the cart
  const handleRemoveFromCart = (index: number) => {
    setCartItems((prevItems) => prevItems.filter((item, i) => i !== index));
  };

  //rendering product buttons
  const renderProductButtons = (data: DataObject) => {
    return data.catalog.objects.map((object, index) => {
      if (object.type === "ITEM") {
        return (
          <div key={index} className="menuButtonWrapperStyle">
            <ProductButton
              productName={object.item_data.name}
              modifierListId={
                object.item_data.modifier_list_info
                  ? object.item_data.modifier_list_info.modifier_list_id
                  : undefined
              }
              onAddToCart={handleAddToCart}
            />
          </div>
        );
      }
      return null; // Return null for non-ITEM objects
    });
  };

  // Function to render cart items in the cartContainer
  const renderCartItems = (cartItems: { name: string; quantity: number }[]) => {
    return cartItems.map((item, index) => (
      <div key={index} className="menuCartItemStyle">
        <span>{item.quantity}</span>
        <span>{item.name}</span>
        <button
          onClick={() => handleRemoveFromCart(index)}
          style={{
            backgroundColor: "red",
            color: "white",
            fontSize: "14px",
            borderRadius: "4px",
            padding: "4px 8px",
            cursor: "pointer",
          }}
        >
          Remove
        </button>
      </div>
    ));
  };

  return (
    <div className="menuPageContainer">
      <header className="menuHeaderContainer">
        <h1>Menu Page</h1>
      </header>
      <div className="menuContainerStyle">
        <div className="menuButtonsContainerStyle">
          {renderProductButtons(data)}
          <div className="menuCartContainerStyle">
            <h3 className="menuCartHeader">Cart</h3>
            {renderCartItems(cartItems)}
          </div>
        </div>
      </div>
      <CompleteOrderButton cartItems={cartItems} />
    </div>
  );
};
export default MenuPage;

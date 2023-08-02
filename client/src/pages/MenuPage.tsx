import React, { useEffect, useState } from 'react';
import ProductButton from '../components/menu/ProductButton';
import { Colors, Overlay } from '@blueprintjs/core';

type MenuProps = {
  token: string;
};

interface DataObject {
  _id: { $oid: string };
  catalog: {
    objects: Array<any>;
  };
  merchant_id: string;
}

const MenuPage = ({ token }: MenuProps) => {
  const [data, setData] = useState<DataObject | null>(null);

  useEffect(() => {
    fetch('/StoreData.json')
      .then((response) => response.json())
      .then((jsonData) => setData(jsonData))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  const containerStyle: React.CSSProperties = {
    display: 'flex',
    flexWrap: 'wrap', // Allow flex items to wrap to the next line
    justifyContent: 'space-between', // Align flex items with space between them horizontally
  };

  const buttonWrapperStyle: React.CSSProperties = {
    padding: '10px',
    width: '200px',
    margin: '5px',
  };

  const headerContainer: React.CSSProperties = {
    textAlign: 'center',
    alignItems: 'center',
    fontSize: '20px',
    marginTop: '0', 
  };

  const buttonsContainerStyle: React.CSSProperties = {
    alignItems: 'left',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    paddingBottom: '20px', 
  };

  const checkoutButtonStyle: React.CSSProperties = {
    position: 'fixed', 
    bottom: '20px', 
    left: '50%', 
    transform: 'translateX(-50%)', 
    width: '300px',
    height: '100px',
    backgroundColor: 'green',
    color: 'white',
    fontSize: '20px',
    borderRadius: '8px',
    cursor: 'pointer',
    marginTop: '500px'
  };
  

  const pageStyle: React.CSSProperties = {
    background: '#B2DFDB',
    margin: '0',
    padding: '0',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
  };

  return (
    <div style={pageStyle}>
      <header style={headerContainer}>
        <h1>Menu Page</h1>
      </header>
      <div style={containerStyle}>
        <div style={buttonsContainerStyle}>
          {data.catalog.objects.map((object, index) => (
            <div key={index} style={buttonWrapperStyle}>
              {object.type === 'ITEM' && (
                <ProductButton
                  productName={object.item_data.name}
                  modifierListId={object.item_data.modifier_list_info ?  
                    object.item_data.modifier_list_info.modifier_list_id 
                  : undefined
                  }  
                />
              )}
            </div>
          ))}
        </div>
        {/* Checkout button */}
        <button style={checkoutButtonStyle}>Checkout</button>
      </div>
    </div>
  );
};

export default MenuPage;

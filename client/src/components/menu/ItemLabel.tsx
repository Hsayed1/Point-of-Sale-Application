import React from 'react';
import { Button } from '@blueprintjs/core';

import '../../App.css';

type Item = {
  name: string;
  price?: string;
};

type AppProps = {
  name: string;
  price?: string;
  onSelect?: (item: string) => void;
};

const ItemLabel = ({ name, price, onSelect }: AppProps) => {
  // react hooks

  const itemSelected = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    onSelect ? onSelect(name) : () => {};
  };

  return (
    <Button
      className="item-label-button"
      onClick={itemSelected}
      value={name}
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '40px 100px',
      }}
    >
      <span style={{ marginRight: '8px',fontSize: '25px', fontWeight: 'bold' }}>
        {name}
      </span>
      {price && (
        <span style={{ marginLeft: '8px',fontSize: '25px' }}>
          {price}
        </span>
      )} 
    </Button>
  );
};

export default ItemLabel;

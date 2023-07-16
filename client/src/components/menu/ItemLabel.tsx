import React from 'react';
import { useState, ChangeEvent, FormEvent } from "react";
import { Button } from '@blueprintjs/core';

import '../../App.css';

type Item = {
    name: string;
    price?: string
}

type AppProps = {
    name: string;
    price?: string;
    onSelect?: (item: string) => void
}

const ItemLabel = ({ name, price, onSelect }: AppProps) => {
  // react hooks
  
  const itemSelected = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    onSelect ? onSelect(name) : () => {} ;
  }

  return (
    <Button
        onClick={itemSelected}
        value={name}
    >
        <text>{name}</text>
        <text>{price ? price : ""}</text>
    </Button>
  );
}

export default ItemLabel;

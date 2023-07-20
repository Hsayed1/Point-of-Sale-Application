import React from 'react';
import { getMenu } from '../utils/data-utils';

type MenuProps = {
  token: string;
}


const Menu = ({ token }: MenuProps) => {

  const menu = getMenu(token);

  return (
    <div className='App-header'>
      <div>
        <h2>Menu page</h2>
      </div>
    </div>
  );
};

export default Menu;

export {}; 

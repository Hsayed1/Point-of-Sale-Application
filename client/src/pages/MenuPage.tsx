import React, { useEffect, useState } from 'react';
import { getMenu } from '../utils/data-utils';
import { Menu, MenuItem, Item } from '../utils/store';
import MenuItemCard from '../components/menu/MenuItemCard';

type MenuProps = {
  token: string;
}


const MenuPage = ({ token }: MenuProps) => {

  const [menu, setMenu] = useState<Menu>([]);

  useEffect(() => {
    getMenu(token).then((menu) => {
      setMenu(menu);
    });
  }, []);

  const isItem = (item: MenuItem): item is Item => item.type === 'ITEM';
  
  return (
    <div className='App-header'>
      <div>
        <h2>Menu page</h2>
        {menu.filter((menuItem) => isItem ).map((item) => {
          return (
            <MenuItemCard item={item as Item} />
          )
        }) }
      </div>
    </div>
  );
};

export default MenuPage;

export {}; 

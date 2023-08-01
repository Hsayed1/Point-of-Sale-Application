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
    console.log('token', token);
    console.log('localStorage', localStorage.getItem("accessToken"));
    getMenu(token).then((m) => {
      setMenu(m);
    });
  }, []);

  const isItem = (item: MenuItem): item is Item => item.type === 'ITEM';

  const renderItem = (item: MenuItem) => {
    switch (item.type) {
      case 'ITEM':
        return (<MenuItemCard item={item} />);
      case 'MODIFIER_LIST':
        return (<div>Modifier list</div>);
    }
  }
  
  return (
    <div className='App-header'>
      <div> 
        <h2>Menu page</h2>
        { menu.map(renderItem) }
      </div>
    </div>
  );
};

export default MenuPage;

export {}; 

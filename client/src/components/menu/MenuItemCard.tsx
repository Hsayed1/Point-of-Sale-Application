import React, { useEffect, useState } from 'react';
import { getMenu } from '../../utils/data-utils';
import { MenuItem, ModifierList, Item } from '../../utils/store';

type MenuItemCardProps = {
  item: Item;
}


const MenuItemCardProps = ({ item }: MenuItemCardProps) => {

//   const [menu, setMenu] = useState<Menu>([]);

//   useEffect(() => {
//     getMenu(token).then((menu) => {
//       setMenu(menu);
//     });
//   }, []);




  return (
    <div>
        <div className="card">
            {item.item_data.name}
        </div>
    </div>
  );
};

export default MenuItemCardProps;

export {}; 

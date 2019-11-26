import React from 'react';
import MenuItemLink from './menu-item-link';
import MenuItemParent from './menu-item-parent';

const MenuItem = ({ item, drawerIsOpen }) => (
  <>
    {!item.children && <MenuItemLink item={item} />}
    {item.children && (
      <MenuItemParent item={item} drawerIsOpen={drawerIsOpen} />
    )}
  </>
);

export default MenuItem;

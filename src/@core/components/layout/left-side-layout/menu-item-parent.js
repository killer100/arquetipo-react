
import React, { useState } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import Icon from '@material-ui/core/Icon';
import List from '@material-ui/core/List';
import MenuItem from './menu-item';

const MenuItemParent = ({ item, drawerIsOpen }) => {
	const [open, setOpen] = useState(false);
 
	return (
	  <>
		 <ListItem button onClick={() => setOpen(!open)}>
			<ListItemIcon>
			  <Icon>{item.icon}</Icon>
			</ListItemIcon>
			<ListItemText primary={item.text} />
			<Icon>expand_more</Icon>
		 </ListItem>
		 <Collapse in={open && drawerIsOpen} timeout="auto" unmountOnExit>
			<List component="div" disablePadding>
			  {item.children.map((childrenItem, index) => (
				 <MenuItem item={childrenItem} key={index} />
			  ))}
			</List>
		 </Collapse>
	  </>
	);
 };
 
 export default MenuItemParent;
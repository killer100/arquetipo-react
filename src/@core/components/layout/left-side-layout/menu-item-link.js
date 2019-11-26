import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Icon from '@material-ui/core/Icon';
import { Link } from 'react-router-dom';

const MenuItemLink = ({ item }) => (
  <ListItem button component={Link} to={item.url}>
    <ListItemIcon>
      <Icon>{item.icon}</Icon>
    </ListItemIcon>
    <ListItemText primary={item.text} />
  </ListItem>
);

export default MenuItemLink;

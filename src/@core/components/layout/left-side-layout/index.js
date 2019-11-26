import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import classNames from 'classnames';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as Actions from 'app/store/actions';
import MenuItem from './menu-item';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: props => ({
    marginLeft: props.drawerWidth,
    width: `calc(100% - ${props.drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  }),
  hide: {
    display: 'none'
  },
  drawer: {
    flexShrink: 0,
    whiteSpace: 'nowrap'
  },
  drawerOpen: props => ({
    width: props.drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  }),
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(7) + 1
    }
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar
  },
  imgLogo: {
    width: '80%'
  }
}));

const LeftSideLayout = ({ menu, mobile }) => {
  const theme = useTheme();
  const sidebar = useSelector(state => state.app.leftSideBar);
  const classes = useStyles({ drawerWidth: sidebar.width });
  const dispatch = useDispatch();

  return (
    <Drawer
      //onMouseEnter={onMouseEnter}
      //onMouseLeave={onMouseLeave}
      variant={mobile ? 'temporary' : 'permanent'}
      className={classNames(classes.drawer, {
        [classes.drawerOpen]: sidebar.open,
        [classes.drawerClose]: !sidebar.open
      })}
      classes={{
        paper: classNames({
          [classes.drawerOpen]: sidebar.open,
          [classes.drawerClose]: !sidebar.open
        })
      }}
      open={sidebar.open}
    >
      <div className={classes.toolbar}>
        <IconButton onClick={() => dispatch(Actions.hideSidebar())}>
          {theme.direction === 'rtl' ? (
            <Icon>chevron_right</Icon>
          ) : (
            <Icon>chevron_left</Icon>
          )}
        </IconButton>
      </div>
      <Divider />
      <List>
        {menu.map((item, index) => (
          <MenuItem item={item} key={index} drawerIsOpen={sidebar.open} />
        ))}
      </List>
    </Drawer>
  );
};

LeftSideLayout.defaultProps = {
  menu: []
};

export default LeftSideLayout;

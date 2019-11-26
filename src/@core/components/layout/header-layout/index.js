import AppBar from '@material-ui/core/AppBar';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as Actions from 'app/store/actions';
import Hidden from '@material-ui/core/Hidden';

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block'
    }
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginLeft: 0,
    marginRight: 10,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto'
    }
  },
  searchIcon: {
    width: theme.spacing(9),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputRoot: {
    color: 'inherit',
    width: '100%'
  },
  inputInput: {
    paddingTop: theme.spacing(),
    paddingRight: theme.spacing(),
    paddingBottom: theme.spacing(),
    paddingLeft: theme.spacing(10),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200
      }
    }
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
  menuButton: {
    marginLeft: 12,
    marginRight: 36
  },
  noPaddingLeft: {
    paddingLeft: 0
  }
}));

const HeaderComponent = ({ appName, onClickLogout, userName }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const leftSideBar = useSelector(state => state.app.leftSideBar);
  const dispatch = useDispatch();

  const classes = useStyles({ drawerWidth: leftSideBar.width });

  function handleClickUserMenu(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleCloseUserMenu() {
    setAnchorEl(null);
  }
  return (
    <div className={classes.root}>
      <AppBar
        position="fixed"
        className={classNames(classes.appBar, {
          [classes.appBarShift]: leftSideBar.open
        })}
      >
        <Toolbar
          className={classNames({ [classes.noPaddingLeft]: !leftSideBar.open })}
        >
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            onClick={() => dispatch(Actions.openSidebar())}
            className={classNames(classes.menuButton, {
              [classes.hide]: leftSideBar.open
            })}
          >
            <Icon>menu</Icon>
          </IconButton>
          {
            <Typography
              className={classes.title}
              variant="h6"
              color="inherit"
              noWrap
            >
              App
            </Typography>
          }
          <div className={classes.grow} />
          <Hidden xsDown>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <Icon>search</Icon>
              </div>
              <InputBase
                placeholder="Buscar..."
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput
                }}
              />
            </div>
          </Hidden>
          <IconButton
            aria-controls="user-menu"
            aria-haspopup="true"
            color="inherit"
            onClick={handleClickUserMenu}
          >
            <Icon>account_circle</Icon>
          </IconButton>
          <Menu
            id="user-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleCloseUserMenu}
          >
            <MenuItem onClick={handleCloseUserMenu}>{userName}</MenuItem>
            <MenuItem onClick={onClickLogout}>Logout</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </div>
  );
};

HeaderComponent.defaultProps = {
  userName: '-'
};

export default HeaderComponent;

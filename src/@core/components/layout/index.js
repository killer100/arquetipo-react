import { makeStyles } from '@material-ui/core/styles';
import React, { useContext } from 'react';
import { renderRoutes } from 'react-router-config';
import AppContext from 'app/AppContext';
import BodyLayout from './body-layout';
import HeaderLayout from './header-layout';
import LeftSideLayout from './left-side-layout';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    height: '100%',
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex'
  }
}));

const Layout = ({ width }) => {
  const appContext = useContext(AppContext);
  const { routes } = appContext;
  const classes = useStyles();

  const isMobile = isWidthUp('sm', width) ? false : true;

  return (
    <div className={classes.root}>
      <HeaderLayout></HeaderLayout>
      <LeftSideLayout mobile={isMobile}></LeftSideLayout>
      <BodyLayout>
        <React.Suspense fallback={<div>Loading... </div>}>
          {renderRoutes(routes)}
        </React.Suspense>
      </BodyLayout>
    </div>
  );
};

export default React.memo(withWidth()(Layout));

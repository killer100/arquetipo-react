import { withStyles } from '@material-ui/core/styles';
import React from 'react';

const styles = theme => ({
  content: {
    marginTop: 60,
    overflow: 'auto',
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
    [theme.breakpoints.only('xs')]: {
      paddingLeft: 0,
      paddingRight: 0
    }
  },
  container: {
    maxWidth: 1500,
    margin: '0 auto'
  }
});

const BodyLayout = ({ classes, children }) => (
  <main className={classes.content}>
    <div className={classes.container}>{children}</div>
  </main>
);

export default withStyles(styles)(BodyLayout);

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: 'rgb(40, 61, 124)',
  },
  toolbar: {
    justifyContent: 'space-between',
  },
  logo: {
  },
  buttonContainer: {
    display: 'flex', 
    justifyContent: 'center',
  },
  button: {
    margin: theme.spacing(1),
  },
  active: {
    textDecoration: 'underline',
    textDecorationColor: 'yellow',
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <div className={classes.logo}>
          <img src="/logoa.png" alt="Logo" height="50" /> 
        </div>
        <div className={classes.buttonContainer}>
          <Button color="inherit" className={classes.button}>Home</Button>
          <Button color="inherit" className={`${classes.button} ${classes.active}`}>Workspace</Button>
          <Button color="inherit" className={classes.button}>Help</Button>
        </div>
        <div /> 
      </Toolbar>
    </AppBar>
  );
}

import React from "react";
import useStyles from "./style/HeaderStyles"; // Import the styles
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";

export default function Header() {
  const classes = useStyles(); // Use the styles

  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <div className={classes.logo}>
          <img src="/logoa.png" alt="Logo" height="50" />
        </div>
        <div className={classes.buttonContainer}>
          <Button color="inherit" className={classes.button}>
            Home
          </Button>
          <Button
            color="inherit"
            className={`${classes.button} ${classes.active}`}
          >
            Workspace
          </Button>
          <Button color="inherit" className={classes.button}>
            Help
          </Button>
        </div>
        <div />
      </Toolbar>
    </AppBar>
  );
}

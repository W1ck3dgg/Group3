import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  sidebar: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(2),
    backgroundColor: theme.palette.background.paper,
    height: '100vh',
  },
  button: {
    margin: theme.spacing(1),
    width: '20%',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  icon: {
    marginRight: theme.spacing(1),
    width: 24,
    height: 24,
  },
}));

export default function Sidebar() {
  const classes = useStyles();

  return (
    <div className={classes.sidebar}>
      <Button className={classes.button}>
        <img src="/path/to/your/icon1.png" alt="Tool 1" className={classes.icon} />
        My tool
      </Button>
      <Button className={classes.button}>
        <img src="/path/to/your/icon1.png" alt="Tool 1" className={classes.icon} />
        Kim tool
      </Button>
      <Button className={classes.button}>
        <img src="/path/to/your/icon1.png" alt="Tool 1" className={classes.icon} />
        Mazoun tool
      </Button>
      <Button className={classes.button}>
        <img src="/path/to/your/icon1.png" alt="Tool 1" className={classes.icon} />
        Negin tool
      </Button>
    </div>
  );
}

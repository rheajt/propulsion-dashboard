import React from 'react';
import SettingsIcon from '@material-ui/icons/Settings';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  button: {
    position: 'absolute',
    left: '2rem',
    bottom: '1rem',
  },
});

function SettingsButton() {
  const classes = useStyles();

  return (
    <div className={classes.button}>
      <SettingsIcon fontSize="large" />
    </div>
  );
}

export default SettingsButton;

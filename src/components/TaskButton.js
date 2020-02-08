import React from 'react';
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';
import { withStyles } from '@material-ui/core';

const styles = {
  taskButton: {
    position: 'absolute',
    bottom: '1rem',
    right: '2rem',
  },
};

function TaskButton({ onClick, classes }) {
  return (
    <div className={classes.taskButton} onClick={onClick}>
      <FormatListNumberedIcon fontSize="large" />
    </div>
  );
}

export default withStyles(styles)(TaskButton);

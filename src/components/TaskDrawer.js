import React from 'react';
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  container: {
    width: 400,
  },
});
function TaskDrawer() {
  const classes = useStyles();

  return (
    <Paper className={classes.container}>
      <h1>hello world</h1>
    </Paper>
  );
}

export default TaskDrawer;

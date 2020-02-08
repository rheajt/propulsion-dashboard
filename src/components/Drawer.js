import React from 'react';
import { Drawer as MuiDrawer } from '@material-ui/core';

export default function Drawer({ open, setTasks, children }) {
  const toggleDrawer = event => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setTasks(false);
  };

  return (
    <MuiDrawer anchor="right" open={open} onClose={toggleDrawer}>
      {children}
    </MuiDrawer>
  );
}

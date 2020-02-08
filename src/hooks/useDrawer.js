import React from 'react';

function useDrawer(side = 'right') {
  const [open, setOpen] = React.useState(true);

  const toggleDrawer = () => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setOpen(!open);
  };

  return {
    toggleDrawer,
    side,
    open,
  };
}

export default useDrawer;

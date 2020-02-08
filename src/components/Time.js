import React from 'react';
import Typography from '@material-ui/core/Typography';
import Fade from '@material-ui/core/Fade';
import useTimer from '../hooks/useTimer';

function Time() {
  const { time, day } = useTimer();

  return (
    <Fade in timeout={4000}>
      <div>
        <Typography variant="h1" color="inherit" style={{ fontSize: '8rem' }}>
          {time}
        </Typography>
        <Typography variant="h4" color="inherit" style={{ fontSize: '2rem' }}>
          {day}
        </Typography>
      </div>
    </Fade>
  );
}

export default Time;

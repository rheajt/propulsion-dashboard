import React, { useState } from 'react';
import { format } from 'date-fns';

function useTimer() {
  const [time, setTime] = useState({
    time: '',
    day: '',
    year: '',
  });

  React.useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      const time = `${date.getHours()}:${date
        .getMinutes()
        .toString()
        .padStart(2, '0')}`;

      const day = format(date, 'iiii, MMM do');
      const year = format(date, `Do 'day of' yyyy`);
      setTime({ time, day, year });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return time;
}

export default useTimer;

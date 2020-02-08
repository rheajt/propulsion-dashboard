import React, { useState } from 'react';
import {
  makeStyles,
  TextField,
  Checkbox,
  FormControlLabel,
} from '@material-ui/core';
import { format } from 'date-fns';

function Task({ task, onClick }) {
  console.log(task.complete);
  return (
    <div>
      <FormControlLabel
        control={
          <Checkbox
            checked={task.complete}
            onChange={onClick}
            inputProps={{ 'aria-label': 'secondary checkbox' }}
          />
        }
        label={task.text}
      />
    </div>
  );
}

function TaskForm() {
  const classes = useStyles();
  const [tasks, setTasks] = useState([
    {
      complete: false,
      text: 'first task',
    },
    {
      complete: true,
      text: 'second task',
    },
  ]);

  const toggleCheck = ind => () => {
    tasks[ind].complete = !tasks[ind].complete;
    setTasks([...tasks]);
  };

  const onSubmit = e => {
    e.preventDefault();
    setTasks([...tasks, { complete: false, text: e.target.task.value }]);
  };

  return (
    <div className={classes.background}>
      <div className={classes.topBar} onClick={() => console.log('close')}>
        {format(new Date(), 'd.LL.yy E')}
      </div>
      <form onSubmit={onSubmit}>
        <TextField name="task" placeholder="New task here" variant="outlined" />
      </form>
      {tasks.map((task, ind) => (
        <Task task={task} key={task.text + ind} onClick={toggleCheck(ind)} />
      ))}
    </div>
  );
}

const useStyles = makeStyles(({ typography, ...theme }) => ({
  topBar: {
    height: theme.mixins.toolbar.minHeight,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '2rem',
    textTransform: 'uppercase',
    fontStyle: 'italic',
  },
  background: {
    height: '100%',
    padding: '1rem',
    backgroundSize: `${typography.pxToRem(40)} ${typography.pxToRem(40)}`,
    backgroundImage:
      'linear-gradient(to right, lightgrey 1px, transparent 1px), linear-gradient(to bottom, lightgrey 1px, transparent 1px)',
  },
}));

export default TaskForm;

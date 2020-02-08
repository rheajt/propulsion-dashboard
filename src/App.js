import React from 'react';
import { makeStyles } from '@material-ui/core';
import withRoot from './styles/withRoot';
import Time from './components/Time';
import TaskButton from './components/TaskButton';
import SettingsButton from './components/SettingsButton';
import Drawer from './components/Drawer';
import TaskForm from './components/TaskForm';

const useStyles = makeStyles(theme => ({
  container: {
    backgroundImage: 'url(https://source.unsplash.com/daily)',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    height: '100vh',
    color: theme.palette.common.white,
    textShadow: '0 1px 5px rgba(0,0,0,.1)',
  },
  main: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    position: 'relative',
  },
}));

function App() {
  const classes = useStyles();
  const [tasks, setTasks] = React.useState(false);

  return (
    <div className={classes.container}>
      <div className={classes.main}>
        <Time />
        <TaskButton onClick={() => setTasks(true)} />
        <SettingsButton />
      </div>
      <Drawer open={tasks} setTasks={setTasks}>
        <TaskForm />
      </Drawer>
    </div>
  );
}

export default withRoot(App);

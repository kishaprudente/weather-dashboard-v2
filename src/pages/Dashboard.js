import React from 'react';
import { Grid } from '@material-ui/core';
import NavBar from '../components/NavBar';

const Dashboard = () => {
  return (
    <Grid container style={styles.root}>
      <Grid item xs={12}>
        <NavBar />
      </Grid>
    </Grid>
  );
};

const styles = {
  root: {
    justifyContent: 'center',
    width: '100vw',
    height: '100vh',
  },
};

export default Dashboard;

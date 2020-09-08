import React from 'react';
import { Grid } from '@material-ui/core';
// import styled from 'styled-components';
import Hero from '../components/Hero';
// import SearchBar from '../components/SearchBar';

// const GridContainer = styled(Grid)`
//   justify-content: center;
//   width: 100%;
//   height: 100%;
// `;

const Dashboard = () => {
  return (
    <Grid container style={styles.root}>
      <Grid item xs={10}>
        <Hero />
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

import React from 'react';
import { Paper, Typography } from '@material-ui/core';
import Moment from 'react-moment';
import SearchBar from './SearchBar';
import Cloud from '../assets/cloud.jpg';

const Hero = () => {
  return (
    <Paper style={styles.root} elevation={3}>
      <Typography style={styles.title} variant='h3'>
        Weather Dashboard
      </Typography>
      <SearchBar />
      <Typography style={styles.date} variant='h6'>
        <Moment date={new Date()} format='LLLL' />
      </Typography>
    </Paper>
  );
};

const styles = {
  root: {
    backgroundImage: `url(${Cloud})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '40%',
    marginTop: '2em',
  },
  title: {
    padding: '1em',
    textShadow: '2px 2px lightgray',
  },
  date: {
    padding: '1em',
  },
};

export default Hero;

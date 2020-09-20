import React, { useState } from 'react';
import { Grid, Typography } from '@material-ui/core';
import Header from '../components/Header';
import WeatherCard from '../components/WeatherCard';
import API from '../util/API';

const Dashboard = () => {
  const [searchCity, setSearchCity] = useState('');
  const [weather, setWeather] = useState({
    name: '',
    temp: '',
    feelsLike: '',
    pressure: '',
    humidity: '',
    min: '',
    max: '',
  });

  const handleInputChange = (e) => {
    const { value } = e.target;
    setSearchCity(value);
  };

  const handleKeyPress = (e) => {
    const { value } = e.target;
    if(e.keyCode === 13) {
      console.log('city:', value);
      handleSearch(searchCity);
    }
  };

  const handleSearch = async (city) => {
    const weatherData = await API.getCityData(city);
    console.log(weatherData);
    const { name } = weatherData.data;
    const { 
      feels_like,
      pressure,
      humidity,
      temp,
      temp_max,
      temp_min
    } = weatherData.data.main;
    setWeather({
      name: name,
      temp: temp,
      feelsLike: feels_like,
      pressure: pressure,
      humidity: humidity,
      min: temp_min,
      max: temp_max,
    })
  };

  const { name, temp, feelsLike, pressure, humidity, min, max } = weather;

  return (
    <Grid container style={styles.root}>
      <Grid item xs={12}>
        <Header
          handleInputChange={handleInputChange}
          handleKeyPress={handleKeyPress}
        />
      </Grid>
      <Grid item xs={8}>
        <WeatherCard 
          name={name}
          temp={temp}
          feelsLike={feelsLike}
          pressure={pressure}
          humidity={humidity}
          min={min}
          max={max}
        />
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

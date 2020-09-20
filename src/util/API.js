import axios from 'axios';
require('dotenv').config();

export default {
  getCityData: (city) => {
    const queryURL = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}&units=imperial`;
    return axios.get(queryURL);
  },
};

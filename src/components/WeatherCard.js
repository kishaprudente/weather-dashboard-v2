import React from 'react';
import { Paper, Card, CardContent, Typography } from '@material-ui/core';

const WeatherCard = ({name, temp, feelsLike, pressure, humidity, min, max}) => {
  return (
    <Paper>
      <Card>
        <CardContent>
          <Typography>{temp} °F</Typography>
        </CardContent>
      </Card>
    </Paper>
  )
};

export default WeatherCard;
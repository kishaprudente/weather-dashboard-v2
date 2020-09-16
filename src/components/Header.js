import React, {useState} from 'react';
import { AppBar, Typography, Toolbar, InputBase } from '@material-ui/core';
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import API from '../util/API';

const useStyles = makeStyles((theme) => ({
  nav: {
    backgroundColor: '#136D9D'
  }, 
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: '20px',
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(10),
      width: '55%',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'white',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(2em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

const Header = () => {
  const classes = useStyles();
  const [searchCity, setSearchCity] = useState('');

  const handleInputChange = (e) => {
    const { value } = e.target;
    setSearchCity(value);
  }

  const handleKeyPress = (e) => {
    const { value } = e.target;
    if(e.keyCode === 13) {
      console.log('city:', value);
      handleSearch(searchCity);
    }
  }

  const handleSearch = async (city) => {
    const weatherData = await API.getCityData(city);
    console.log(weatherData);
  }

  return (
    <AppBar position="static" className={classes.nav}>
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            Weather Dashboard
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search City…"
              onChange={(e) => handleInputChange(e)}
              onKeyDown={(e) => handleKeyPress(e)}
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
        </Toolbar>
      </AppBar>
  )
}

export default Header;
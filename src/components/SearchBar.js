import React, { useState } from 'react';
import { TextField, InputAdornment } from '@material-ui/core';
import { Search } from '@material-ui/icons';

const SearchBar = (props) => {
  // const [search, setSearch] = useState();

  const handleInputChange = (event) => {
    console.log(event.target.value);
  };

  return (
    <TextField
      style={styles.search}
      variant='outlined'
      id='search'
      name='search'
      placeholder='Search...'
      onChange={(e) => handleInputChange(e)}
      InputProps={{
        startAdornment: (
          <InputAdornment position='start'>
            <Search />
          </InputAdornment>
        ),
      }}
    />
  );
};

const styles = {
  search: {
    backgroundColor: 'white',
    opacity: '0.8',
    width: '60%',
  },
};

export default SearchBar;

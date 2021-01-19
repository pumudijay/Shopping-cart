import { InputAdornment, TextField } from '@material-ui/core';
import React from 'react';
import SearchIcon from '@material-ui/icons/Search';

class SearchBar extends React.Component {
    render() {
        return(
            <div style={{marginLeft:"1%"}}>
               <TextField
                    id="search-bar"
                    style={{ margin: 8 }}
                    placeholder="search"
                    fullWidth
                    margin="normal"
                    /*InputLabelProps={{
                        shrink: true,
                    }}*/
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon/>
                            </InputAdornment>
                        ),
                    }}
                    variant="outlined"
        /> 
            </div>
        )
    }
}

export default SearchBar;
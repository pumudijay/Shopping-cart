import { Badge, Grid, Paper } from "@material-ui/core";
import { Component } from "react";
import SearchBar from "./SearchBar";
import ShoppingCartSharpIcon from '@material-ui/icons/ShoppingCartSharp';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import { AuthContext } from "../contexts/AuthContext";
import { NavLink } from "react-router-dom";

class Header extends Component {

    render() {
        return(
            <AuthContext.Consumer>{ ( authContext ) => {
                const { isLoggedIn, userName } = authContext;
                return(
                    <Paper>
                    <Grid container spacing={2} direction="row" alignItems="center" justify="center" varient="raised">
                        <Grid item xs={9}>
                            <SearchBar/>
                        </Grid>
                        <Grid item xs={2} >
                            { isLoggedIn ? <div style={{display: 'flex',alignItems: 'center',flexWrap: 'wrap',color:"black"}}><AccountCircleRoundedIcon /><span>{userName}</span></div> : 
                            <NavLink to="/login" underline="none">
                                Login
                            </NavLink> }
                            
                        </Grid>
                        <Grid item xs={1} >
                            <NavLink to="/cart" >
                                <Badge badgeContent={4} color="primary">
                                    <ShoppingCartSharpIcon style={{color:"black"}}/>
                                </Badge>
                            </NavLink>      
                        </Grid>    
                    </Grid>
                </Paper>
                )
            }}
                
            </AuthContext.Consumer>
            
            
            
        )
    }
}

export default Header;
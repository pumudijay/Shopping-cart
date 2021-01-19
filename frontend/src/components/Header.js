import { Badge, Grid, Link, Paper } from "@material-ui/core";
import { Component } from "react";
import SearchBar from "./SearchBar";
import ShoppingCartSharpIcon from '@material-ui/icons/ShoppingCartSharp';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import { AuthContext } from "../contexts/AuthContext";

class Header extends Component {

    render() {
        return(
            <AuthContext.Consumer>{ ( authContext ) => {
                const { isLoggedIn } = authContext;
                return(
                    <Paper>
                    <Grid container spacing={2} direction="row" alignItems="center" justify="center" varient="raised">
                        <Grid item xs={9}>
                            <SearchBar/>
                        </Grid>
                        <Grid item xs={2} >
                            { isLoggedIn ? <AccountCircleRoundedIcon style={{color:"black"}} /> : <Link href="/login" underline="none">
                                    Login
                            </Link> }
                            
                        </Grid>
                        <Grid item xs={1} >
                            <Link href="/cart" >
                                <Badge badgeContent={4} color="primary">
                                    <ShoppingCartSharpIcon style={{color:"black"}}/>
                                </Badge>
                            </Link>      
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
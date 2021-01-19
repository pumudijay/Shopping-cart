import { Button, FormControl, FormHelperText, TextField } from '@material-ui/core';
import React from 'react';
import { AuthContext } from '../contexts/AuthContext';

class LoginForm extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            username: null,
            password: null,
           /* errors: {
                username: "required",
                password: "required"
            }*/
        };
    }

    handleInputChange = (event) => {
        event.preventDefault();
        const name = event.target.id;
        const value = event.target.value;
        this.setState({
           [ name] : value
        })
    }

    handleSubmit = (event) => {
        
        event.preventDefault();
        console.log( this.state);
        this.props.value.history.push('/');
    }
    
    render() {
        return(
            <AuthContext.Consumer>{ ( authContext ) => {
                const { changeAuthStatus } = authContext;
                //const { errors } = this.state;
                return(
                    <form style={{margin:" 5% 25%", width:"50%",}} onSubmit={this.handleSubmit & changeAuthStatus} >
                        <div>
                            <FormControl error fullWidth>
                            <TextField id="username" label="username"  color="secondary" required fullWidth onChange={this.handleInputChange}></TextField>
                            {/*{errors.username.length > 0 && <FormHelperText id="component-error-text">{errors.username}</FormHelperText>}*/}
                            </FormControl>
                        </div>
                        <div>
                            <FormControl error fullWidth>
                            <TextField id="password" label="password"  color="secondary" required fullWidth onChange={this.handleInputChange} ></TextField>
                            {/*{errors.password.length > 0 && <FormHelperText id="component-error-text">{errors.password}</FormHelperText>}*/}
                            </FormControl>
                        </div>
                        <Button type="Submit" variant="contained" color="secondary" style={{marginTop:"5%", }} fullWidth >
                            Login
                        </Button>
                    </form>          
                )
            }}
        </AuthContext.Consumer>
        )
    }
}

export default LoginForm;
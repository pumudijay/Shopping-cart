import { Button, FormControl, FormHelperText, TextField } from "@material-ui/core";
//import axios from "axios";
import React, { Component } from "react";

const validEmailRegex = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);

const validMobileRegex = new RegExp(/^[0-9\b]+$/);

const validateForm = (errors) => {
    let valid = true;
    Object.values(errors).forEach(
        (val) => val.length > 0 && (valid = false)
    )
    return valid;
}

class RegisterForm extends Component {

    constructor(props){
        super(props)

        this.state = {
            username: null,
            password: null,
            email: null,
            mobile: null,
            errors: {
                username: 'required',
                password: 'required',
                email: 'required',
                mobile: 'required',
            }
        };

    }
    
    handleInputChange = (event) => {
        event.preventDefault();
        const name = event.target.id;
        const value = event.target.value;

        let errors = this.state.errors;

        switch(name) {
            case 'username':
                errors.username = 
                    value.length < 1 ? 'required' : '' ;
                break;
            case 'password': 
                errors.password = 
                    value.length < 1 ? 'required' : value.length < 8 ? 'Password must be 8 characters long!': '' ;
                break;
            case 'email':
                errors.email =
                    value.length < 1 ? 'required' : validEmailRegex.test(value) ? '' : 'Invalied Email!';
                break;
            case 'mobile':
                errors.mobile =
                    value.length < 1 ? 'required' : errors.mobile = validMobileRegex.test(value) && value.length >= 10 ? '' : 'Invalied mobile number!';
                break; 
            default:
                break;
        }
        this.setState({errors, [name]: value})
    }

    handleSubmit = (event) => {
        event.preventDefault();
       if(validateForm(this.state.errors)) {
          // console.info("Valied");
            this.register();
        }else{
            console.error('Invalied');
        }
    }
    async register () {
        
        console.log(this.state);
        //const response = await axios.post('http://localhost:8080/auth/register');
        //console.log(response);
        this.props.value.history.push('/');
    }

    render() {
        const { errors } = this.state;
        return (
                <form style={{margin:" 5% 15%", width:"75%",}} onSubmit={this.handleSubmit}>
                    <div>
                        <FormControl error fullWidth>
                        <TextField id="username" label="username" color="secondary" required fullWidth onChange={this.handleInputChange}  ></TextField>
                        {errors.username.length > 0 && <FormHelperText id="component-error-text">{errors.username}</FormHelperText>}
                        </FormControl> 
                    </div>
                    <div>
                        <FormControl error fullWidth>
                        <TextField id="password" label="password" type="password" color="secondary" required fullWidth onChange={this.handleInputChange} ></TextField>
                        {errors.password.length > 0 && <FormHelperText id="component-error-text">{errors.password}</FormHelperText>}
                        </FormControl>    
                    </div>
                    <div>
                        <FormControl error fullWidth>
                        <TextField id="email" label="email" type="email" color="secondary" required fullWidth onChange={this.handleInputChange} ></TextField>
                        {errors.email.length > 0 && <FormHelperText id="component-error-text">{errors.email}</FormHelperText>}
                        </FormControl> 
                    </div>
                    <div>
                        <FormControl error fullWidth>
                        <TextField id="mobile" label="mobile" type="number" color="secondary" required fullWidth onChange={this.handleInputChange} ></TextField>
                        {errors.mobile.length > 0 && <FormHelperText id="component-error-text">{errors.mobile}</FormHelperText>}
                        </FormControl>
                   </div>
                    <Button type="submit" variant="contained" color="secondary" style={{marginTop:"5%", }} fullWidth >
                        Register
                    </Button>
                </form>
        )
    }
}

export default RegisterForm
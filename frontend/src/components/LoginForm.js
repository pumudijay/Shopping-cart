import { Button, FormControl, TextField } from '@material-ui/core';
import { Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import { AuthContext } from '../contexts/AuthContext';

const SignInSchema = Yup.object().shape({
    username: Yup.string()
      .required('Required'),
    password: Yup.string()
      .min(8, 'password must be 8 characters long!')
      .required('Required'),
  });

function LoginForm(props) {

    return(
<AuthContext.Consumer>{ ( authContext ) => {
    const { changeAuthStatus, setUserName } = authContext;

    return (
        <div>
        <Formik
            initialValues={{
            username: '',
            password: ''
            }}
            validationSchema={SignInSchema}
            onSubmit={values => {
            // same shape as initial values
            console.log(values);
            changeAuthStatus();
            setUserName(values.username);
            props.value.history.push("./");
            }}
        >
            {({ 
                values,
                errors, 
                touched,
                handleChange,
                handleBlur,
                handleSubmit, 
            }) => (
            <form style={{margin:" 5% 25%", width:"50%",}} onSubmit={handleSubmit}>
                <div style={{marginBottom:"3%"}}>
                <FormControl fullWidth>
                    <TextField 
                        id="username" 
                        label="username"
                        variant="outlined"
                        color="secondary"
                        required 
                        fullWidth 
                        onChange={handleChange}
                        onBlur={handleBlur}  
                        value={values.username}
                        error={!errors.username}
                        helperText={errors.username} />
                </FormControl>                   
                </div>
                
                <div>
                <FormControl fullWidth>
                <TextField 
                        id="password" 
                        type="password"
                        variant="outlined"
                        label="password"
                        color="secondary"
                        required 
                        fullWidth 
                        onChange={handleChange}
                        onBlur={handleBlur}  
                        value={values.password}
                        error={!errors.password}
                        helperText={errors.password} />
                </FormControl>
                </div>
                <Button type="Submit" variant="contained" color="secondary" style={{marginTop:"5%", }} fullWidth  >
                    Login
                </Button>
            </form>
            )}

        </Formik>
    </div>
    )
            }}
    </AuthContext.Consumer>
    )
    
}

export default LoginForm;
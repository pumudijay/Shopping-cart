import { AppBar, Paper, Tab } from '@material-ui/core';
import { TabList, TabPanel } from '@material-ui/lab';
import TabContext from '@material-ui/lab/TabContext';
import React from 'react';
import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm';

class LoginHeader extends React.Component {
    
    state = {
        value: "1"
    }

    handleChange = (event, newValue) => {
        this.setState({
            value: newValue
        })
    }
    render() {
        return(
            <Paper square style={{maxWidth:"50%",marginTop:"5%",marginLeft:"25%", padding:"5px", backgroundColor:"#FFFFE0", flexGrow:"1"}}>
            <TabContext value={this.state.value}> 
                <AppBar position="static" color="inherit">
                    <TabList onChange={this.handleChange} variant="fullWidth"> 
                        <Tab label="Login" value="1" ></Tab>
                        <Tab label="Register" value="2"></Tab>
                    </TabList>
                </AppBar>
                <TabPanel value="1"><LoginForm value={this.props}/></TabPanel>
                <TabPanel value="2"><RegisterForm value={this.props}/></TabPanel> 
            </TabContext>
            </Paper>
            
        )
    }
}

export default LoginHeader;
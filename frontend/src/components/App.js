import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AuthContextProvider from '../contexts/AuthContext';
import Home from './Home';
import Header from './Header';
import LoginHeader from './LoginHeader';

const App = () => {
    return(
        <BrowserRouter>
            <div className="App">
                <AuthContextProvider>
                    <Switch>
                        <Route exact path='/' component={Home}></Route>
                        <Route path='/login' component={LoginHeader}></Route>
                        <Route path='/cart' component={Header} ></Route>
                    </Switch>
                </AuthContextProvider>
            </div>
        </BrowserRouter>
    )
}

export default App;
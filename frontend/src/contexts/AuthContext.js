import React, { createContext } from 'react';

export const AuthContext = createContext();

class AuthContextProvider extends React.Component {
    state = {
        isLoggedIn: false,
        userName: null
    };

    changeAuthStatus = ( ) => {
        this.setState({
            isLoggedIn: !this.state.isLoggedIn
        })
    }

    setUserName = ( user ) => {
        this.setState({
            userName: user
        })
    }
    render() {
        return(
            <AuthContext.Provider value={{ ...this.state, changeAuthStatus: this.changeAuthStatus, setUserName: this.setUserName }}>
                {this.props.children}
            </AuthContext.Provider>
        )
    }
}

export default AuthContextProvider;
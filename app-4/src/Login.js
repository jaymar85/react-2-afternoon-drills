import React, {Component} from "react";

class Login extends Component {
    
    constructor() {
        super();

        this.state = {
            username: '',
            password: ''
        };
        
        this.handleLogin = this.handleLogin.bind(this);
    }

    
    handleUsernameChange(name) {
        this.setState({username: name});
    }

    handlePasswordChange(password) {
        this.setState({password: password});
    }

    handleLogin() {
        alert(`Username: ${this.state.username}, Password: ${this.state.password}`);
    }

    render() {
        return (
            <div>
                <input onChange={(event) => this.handleUsernameChange(event.target.value)} type="text" placeholder="username"/>
                <input onChange={(event) => this.handlePasswordChange(event.target.value)} type="text" placeholder="password"/>
                <button onClick={this.handleLogin} >Login</button>
            </div>
        );
    }
}

export default Login;
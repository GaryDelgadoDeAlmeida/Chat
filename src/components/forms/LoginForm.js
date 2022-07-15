import React from 'react'
import { Navigate } from 'react-router-dom'

export default class LoginForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            allowRedirect: false,
        }
    }

    handleChange(event) {
        const {name, value} = event.target;
        this.setState({[name]: value});
    }

    handleSubmit(event) {
        event.preventDefault();
        
        if(this.state.username !== "" && this.state.password !== "") {
            this.setState({allowRedirect: true});
        }
    }

    render() {
        return (
            <>
                {this.state.allowRedirect && (
                    <Navigate to="/chat" />
                )}

                <section className={"login"}>
                    <form className={"login-form"} onSubmit={(e) => this.handleSubmit(e)}>
                        <h1>Login</h1>
                        <input type="text" name="username" placeholder="Username" onChange={(e) => this.handleChange(e)} required/>
                        <input type="password" name="password" placeholder="Password" onChange={(e) => this.handleChange(e)} required/>
                        <button type="submit">Login</button>
                    </form>
                </section>
            </>
        )
    }
}
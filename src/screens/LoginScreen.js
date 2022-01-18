import React from "react";
import LoginForm from "../components/forms/LoginForm";

export default class LoginScreen extends React.Component {

    constructor(props){
        super(props);
        this.state = {}
    }

    render() {
        return (
            <LoginForm />
        )
    };
}
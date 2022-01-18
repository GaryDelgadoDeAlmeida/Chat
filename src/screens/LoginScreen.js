import React from "react";
import LoginForm from "../components/forms/LoginForm";
import "../styles/css/desktop/_login.scss";

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
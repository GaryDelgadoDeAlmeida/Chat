import React from "react";
import Notification from "../Notification";

export default class PasswordForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            oldPassword: "",
            newPassword: "",
            confirmNewPassword: "",
            printResponse: false,
            response: []
        }
    }

    handleChange(e) {
        this.setState({
            name: e.target.value,
            printResponse: false,
            response: []
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({
            printResponse: true,
            response: {
                class: "success",
                message: ""
            }
        })
    }

    render() {
        return (
            <form className={"form"} onSubmit={(e) => this.handleSubmit(e)}>

                {this.state.printResponse && (
                    <Notification response={this.state.response} />
                )}

                <div className={"form-field"}>
                    <label htmlFor={"pwd"}>Current password</label>
                    <input id={"pwd"} type={"password"} name={"oldPassword"} />
                </div>

                <div className={"form-field"}>
                    <label htmlFor={"newPwd"}>New password</label>
                    <input id={"newPwd"} type={"password"} name={"newPassword"} />
                </div>
                
                <div className={"form-field"}>
                    <label htmlFor={"confirmNewPwd"}>Confirm the new password</label>
                    <input id={"confirmNewPwd"} type={"password"} name={"confirmNewPassword"} />
                </div>
                
                <div className={"form-button"}>
                    <button type={"reset"}>Reset</button>
                    <button type={"submit"}>Submit</button>
                </div>
            </form>
        )
    }
}
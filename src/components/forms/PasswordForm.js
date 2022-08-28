import React from "react";

export default class PasswordForm extends React.Component {

    handleChange(e) {
        console.log("Hello handleChange")
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log("Hello handleSubmit")
    }

    render() {
        return (
            <>
                <form className={"form"} onSubmit={(e) => this.handleSubmit(e)}>
                    <div className={"form-field"}>
                        <label htmlFor={"pwd"}>Current password</label>
                        <input id={"pwd"} type={"password"} name="oldPassword" />
                    </div>

                    <div className={"form-field"}>
                        <label htmlFor={"newPwd"}>New password</label>
                        <input id={"newPwd"} type={"password"} name="newPassword" />
                    </div>
                    
                    <div className={"form-field"}>
                        <label htmlFor={"confirmNewPwd"}>Confirm the new password</label>
                        <input id={"confirmNewPwd"} type={"password"} name="confirmNewPassword" />
                    </div>
                    
                    <div className={"form-button"}>
                        <button type={"reset"}>Reset</button>
                        <button type={"submit"}>Submit</button>
                    </div>
                </form>
            </>
        )
    }
}
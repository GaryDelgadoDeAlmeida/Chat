import React from "react";

export default class SocialNetworkForm extends React.Component {

    render() {
        return (
            <>
                <form className={"form"}>
                    <div className={"form-field"}></div>
                    <div className={"form-field"}></div>
                    <div className={"form-field"}></div>
                    <div className={"form-field"}></div>
                    <div className={"form-button"}>
                        <button type={"reset"}>Reset</button>
                        <button type={"submit"}>Submit</button>
                    </div>
                </form>
            </>
        )
    }
}
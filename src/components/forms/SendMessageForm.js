import React from "react"

export default class SendMessageForm extends React.Component {

    handleChange(event) {
        console.log("Hello handleChange")
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log("Hello handleSubmit")
    }

    render() {
        return (
            <div className={"send-message"}>
                <form onSubmit={(e) => this.handleSubmit(e)}>
                    <input type="text" name="message" placeholder="Message . . ." onChange={(e) => this.handleChange(e)} />
                    <button><img src={"/content/svg/paper-plane.svg"} alt="paper-plane" /></button>
                </form>
            </div>
        )
    }
}
import React from "react";

export default class FriendForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            firstname: props.friend.firstname,
            lastname: props.friend.lastname,
            phone: props.friend.phone
        }
    }

    handleChange(e) {
        console.log("Hello handleChange")
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit(e) {
        e.preventDefault()
        console.log("Hello handleSubmit")
    }

    render() {
        return (
            <form className={"form"} onSubmit={(e) => this.handleSubmit(e)}>
                <div className={"form-field"}>
                    <label>Firstname :</label>
                    <input type={"text"} name={"firstname"} maxLength={255} value={this.state.firstname} onChange={(e) => this.handleChange(e)} />
                </div>
                
                <div className={"form-field"}>
                    <label>Lastname :</label>
                    <input type={"text"} name={"lastname"} maxLength={255} value={this.state.lastname} onChange={(e) => this.handleChange(e)}/>
                </div>
                
                <div className={"form-field"}>
                    <label>Phone :</label>
                    <input type={"tel"} name={"phone"} value={this.state.phone} onChange={(e) => this.handleChange(e)}/>
                </div>

                <div className={"form-button"}>
                    <button type={"submit"}>Submit</button>
                </div>
            </form>
        )
    }
}
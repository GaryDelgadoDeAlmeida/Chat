import React from "react";
import Notification from "../Notification";

export default class FriendForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            allowEdit: false,
            disableFields: true,
            firstname: "",
            lastname: "",
            email: "",
            phone: "",
            printResponse: false,
            response: []
        }
    }

    handleChange(e) {
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit(e) {
        e.preventDefault()
        this.setState({
            disableFields: true,
            printResponse: true,
            response: {
                class: "success",
                message: "La mise à jour des données personnelles de votre contact a bien été prise en compte"
            }
        })
    }

    allowFormEdit(e) {
        this.setState({
            allowEdit: true,
            disableFields: false,
            firstname: this.props.friend.firstname,
            lastname: this.props.friend.lastname,
            email: this.props.friend.email,
            phone: this.props.friend.phone,
            printResponse: false,
            response: []
        })
    }

    render() {
        return (
            <form className={"form"} onSubmit={(e) => this.handleSubmit(e)}>

                {this.state.printResponse && (
                    <Notification response={this.state.response} />
                )}

                <div className={"form-field"}>
                    <label>Firstname :</label>
                    <input type={"text"} name={"firstname"} maxLength={255} value={!this.state.allowEdit ? this.props.friend.firstname : this.state.firstname} onChange={(e) => this.handleChange(e)} disabled={this.state.disableFields} />
                </div>
                
                <div className={"form-field"}>
                    <label>Lastname :</label>
                    <input type={"text"} name={"lastname"} maxLength={255} value={!this.state.allowEdit ? this.props.friend.lastname : this.state.lastname} onChange={(e) => this.handleChange(e)} disabled={this.state.disableFields}/>
                </div>
                
                <div className={"form-field"}>
                    <label>Email :</label>
                    <input type={"email"} name={"email"} value={!this.state.allowEdit ? this.props.friend.email : this.state.email} onChange={(e) => this.handleChange(e)} disabled={this.state.disableFields}/>
                </div>
                
                <div className={"form-field"}>
                    <label>Phone :</label>
                    <input type={"tel"} name={"phone"} value={!this.state.allowEdit ? this.props.friend.phone : this.state.phone} onChange={(e) => this.handleChange(e)} disabled={this.state.disableFields}/>
                </div>

                <div className={"form-button"}>
                    {/* Submit button */}
                    {!this.state.disableFields && (
                        <button type={"submit"}>Submit</button>
                    )}
                    
                    {/* Allow edit button */}
                    {this.state.disableFields && (
                        <button className={"btn btn-danger"} onClick={(e) => this.allowFormEdit(e)}>Edit</button>
                    )}
                </div>
            </form>
        )
    }
}
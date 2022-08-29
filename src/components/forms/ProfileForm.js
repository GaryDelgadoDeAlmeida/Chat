import React from "react";
import * as countries from "../../data/country.json";
import Notification from "../Notification";
import { isEmail } from "../../functions/functions";

export default class ProfileForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            firstname: "",
            lastname: "",
            email: "",
            phone: "",
            address: "",
            city: "",
            zipCode: "",
            country: "",
            printResponse: false,
            response: []
        }
    }

    handleChange(e) {
        var fieldName = e.target.name;
        var fieldValue = e.target.value;

        if(fieldName === "email") {
            if(!isEmail(fieldValue)) {
                this.setState({
                    printResponse: true,
                    response: {
                        class: "danger",
                        message: "L'adresse email renseigné n'est pas valide."
                    }
                })
                return;
            }
        }

        this.setState({
            [fieldName]: fieldValue,
            printResponse: false,
            response: []
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        var {firstname, lastname, email, phone, address, city, zipCode, country} = this.state;
        var tab = [firstname, lastname, email, phone, address, city, zipCode, country];

        if(tab.indexOf("") !== false) {
            this.setState({
                printResponse: true,
                response: {
                    class: "danger",
                    message: "Une erreur a été rencontrée avec un ou plusieurs champs. Veuillez vérifier que les champs sont bien remplie."
                }
            })
            return
        } else {
            this.setState({
                printResponse: true,
                response: {
                    class: "success",
                    message: "La mise à jour de vos informations personnelles ont bien été prise en compte."
                }
            })
        }
    }

    render() {
        return (
            <form id={this.props.id} className={"form"} onSubmit={(e) => this.handleSubmit(e)}>
                
                {this.state.printResponse && (
                    <Notification response={this.state.response} />
                )}

                <div className={"form-field"}>
                    <label htmlFor={"firstname"}>Firstname :</label>
                    <input id={"firstname"} type={"text"} name={"firstname"} onChange={(e) => this.handleChange(e)} />
                </div>

                <div className={"form-field"}>
                    <label htmlFor={"lastname"}>Lastname :</label>
                    <input id={"lastname"} type={"input"} name={"lastname"} onChange={(e) => this.handleChange(e)} />
                </div>

                <div className={"form-field"}>
                    <label htmlFor={"email"}>Email :</label>
                    <input id={"email"} type={"email"} name={"email"} onChange={(e) => this.handleChange(e)} />
                </div>

                <div className={"form-field"}>
                    <label htmlFor={"phone"}>Phone :</label>
                    <input id={"phone"} type={"tel"} name={"phone"} onChange={(e) => this.handleChange(e)} />
                </div>

                <div className={"form-field"}>
                    <label htmlFor={"address"}>Address :</label>
                    <textarea id={"address"} name={"address"} rows="3" onChange={(e) => this.handleChange(e)}></textarea>
                </div>
                
                <div className={"form-field"}>
                    <label htmlFor={"city"}>City :</label>
                    <input id={"city"} type={"text"} name={"city"} onChange={(e) => this.handleChange(e)} />
                </div>

                <div className={"form-field"}>
                    <label htmlFor={"zipCode"}>Zip Code :</label>
                    <input id={"zipCode"} type={"text"} name={"zipCode"} onChange={(e) => this.handleChange(e)} />
                </div>

                <div className={"form-field"}>
                    <label htmlFor={"country"}>Country :</label>
                    <select id={"country"} name={"country"} onChange={(e) => this.handleChange(e)}>
                        <option>Select a country</option>
                        {countries.default.map((country, i) => {
                            return (
                                <option key={i} value={country.code}>{country.name}</option>
                            )
                        })}
                    </select>
                </div>

                <div className={"form-button"}>
                    <button type={"reset"}>Reset</button>
                    <button className={"btn btn-primary"} type={"submit"}>Submit</button>
                </div>
            </form>
        )
    }
}
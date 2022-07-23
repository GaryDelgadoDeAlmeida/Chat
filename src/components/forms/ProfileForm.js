import React from "react";
import * as countries from "../../data/country.json";

export default class ProfileForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            firstname: "",
            lastname: "",
            address: "",
            zipCode: "",
            country: "",
            phone: "",
        }
    }

    handleChange(e) {
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log("Hello handleSubmit")
    }

    render() {
        return (
            <form className={"form"} onSubmit={(e) => this.handleSubmit(e)}>
                <div className={"form-field"}>
                    <label htmlFor={"firstname"}>Firstname :</label>
                    <input id={"firstname"} type={"text"} name={"firstname"} />
                </div>

                <div className={"form-field"}>
                    <label htmlFor={"lastname"}>Lastname :</label>
                    <input id={"lastname"} type={"input"} name={"lastname"} />
                </div>

                <div className={"form-field"}>
                    <label htmlFor={"email"}>Email :</label>
                    <input id={"email"} type={"email"} name={"email"} />
                </div>

                <div className={"form-field"}>
                    <label htmlFor={"phone"}>Phone :</label>
                    <input id={"phone"} type={"tel"} name={"phone"} />
                </div>

                <div className={"form-field"}>
                    <label htmlFor={"address"}>Address :</label>
                    <textarea id={"address"} name={"address"} rows="3"></textarea>
                </div>

                <div className={"form-field"}>
                    <label htmlFor={"zipCode"}>Zip Code :</label>
                    <input id={"zipCode"} type={"text"} name={"zipCode"} />
                </div>

                <div className={"form-field"}>
                    <label htmlFor={"country"}>Country :</label>
                    <select id={"country"} name={"country"}>
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
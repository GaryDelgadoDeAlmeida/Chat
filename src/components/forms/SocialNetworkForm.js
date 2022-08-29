import React from "react";
import { isLink } from "../../functions/functions";
import Notification from "../Notification";

export default class SocialNetworkForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            urlFacebook: "",
            urlInstagram: "",
            urlTwitter: "",
            urlLinkedin: "",
            response: [],
            printResponse: false
        }
    }

    handleChange(e) {
        let value = e.target.value;

        if(!isLink(value)) {
            this.setState({
                response: {
                    class: "danger",
                    message: "La valeur donnée n'est pas un lien valide."
                },
                printResponse: true,
            })
            return;
        }

        this.setState({
            [e.target.name]: value,
            response: [],
            printResponse: false
        })
    }

    handleSubmit(e) {
        e.preventDefault()
        var { urlFacebook, urlInstagram, urlTwitter, urlLinkedin } = this.state;

        if(
            urlFacebook === "" ||
            urlInstagram === "" ||
            urlTwitter === "" ||
            urlLinkedin === ""
        ) {
            this.setState({
                printResponse: true,
                response: {
                    class: "danger",
                    message: "Une erreur a été rencontrée avec un ou plusieurs champs. Veuillez vérifier que toutes les valeurs sont correctes"
                }
            })
        } else {
            this.setState({
                printResponse: true,
                response: {
                    class: "success",
                    message: "Vos données personnelles ont bien été mises à jours."
                }
            })
        }
    }

    render() {
        return (
            <>
                <form className={"form"} onSubmit={(e) => this.handleSubmit(e)}>

                    {this.state.printResponse && (
                        <Notification response={this.state.response} />
                    )}

                    <div className={"form-field"}>
                        <label htmlFor={"urlFacebook"}>Facebook</label>
                        <input type={"url"} name={"urlFacebook"} onChange={(e) => this.handleChange(e)} />
                    </div>

                    <div className={"form-field"}>
                        <label htmlFor={"urlInstagram"}>Instagram</label>
                        <input type={"url"} name={"urlInstagram"} onChange={(e) => this.handleChange(e)} />
                    </div>

                    <div className={"form-field"}>
                        <label htmlFor={"urlTwitter"}>Twitter</label>
                        <input type={"url"} name={"urlTwitter"} onChange={(e) => this.handleChange(e)} />
                    </div>

                    <div className={"form-field"}>
                        <label htmlFor={"urlLinkedin"}>Linkedin</label>
                        <input type={"url"} name={"urlLinkedin"} onChange={(e) => this.handleChange(e)} />
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
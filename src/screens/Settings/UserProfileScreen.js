import React from "react";
import Sidebar from "../../components/Sidebar";
import ProfileForm from "../../components/forms/ProfileForm";
import PasswordForm from "../../components/forms/PasswordForm";
import SocialNetworkForm from "../../components/forms/SocialNetworkForm";

export default class UserProfileScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            photo: "/content/img/avatar.png",
            firstname: "Garry",
            lastname: "ALMEIDA",
            email: "gary.almeida.work@gmail.com",
            phone: "06 52 07 39 97",
            address: "189 rue Vercingétorix",
            city: "Paris",
            zipCode: "75014",
            country: "France",
            socialLinks: [
                {
                    url: "https://facebook.com",
                    title: "<username>",
                    type: "facebook",
                    icon: "/content/svg/phone.svg"
                },
                {
                    url: "https://twitter.com",
                    title: "<username>",
                    type: "twitter",
                    icon: "/content/svg/phone.svg"
                },
                {
                    url: "https://instagram.com",
                    title: "<username>",
                    type: "instagram",
                    icon: "/content/svg/phone.svg"
                },
                {
                    url: "https://linkedin.com",
                    title: "<username>",
                    type: "linkedin",
                    icon: "/content/svg/phone.svg"
                }
            ],
            time: new Date(),
        };
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({ time: new Date() })
        }, 1000)
    }

    render() {
        return (
            <Sidebar>
                <div className={"content-wrapper"}>
                    
                    {/* Sidebar */}
                    <div className={"sidebar-header"}>
                        <div className={"profile-list"}>

                            {/* Profile */}
                            <div className={"profile-card"}>
                                <div>
                                    <img src={this.state.photo} alt={""} />
                                </div>
                                
                                <div>
                                    <label>{this.state.firstname} {this.state.lastname}</label>
                                </div>
                                
                                <button className={"btn btn-logout"}>Logout</button>
                            </div>

                            {/* Personal Data */}
                            <div className={"profile-card"}>
                                <div className={"card-group"}>

                                    {/* Local Time */}
                                    <div className={"card-row local-time"}>
                                        <div className={"card-body"}>
                                            <p className={"c-lightSilver"}>Local Time</p>
                                            <p>{this.state.time.toLocaleTimeString()}</p>
                                        </div>

                                        <img src={"/content/svg/phone.svg"} alt={""} />
                                    </div>

                                    {/* Mobile Phone */}
                                    <div className={"card-row phone"}>
                                        <div className={"card-body"}>
                                            <p className={"c-lightSilver"}>Phone</p>
                                            <p>{this.state.phone}</p>
                                        </div>

                                        <img src={"/content/svg/phone.svg"} alt={""} />
                                    </div>

                                    {/* Email address */}
                                    <div className={"card-row email"}>
                                        <div className={"card-body"}>
                                            <p className={"c-lightSilver"}>Email</p>
                                            <p>{this.state.email}</p>
                                        </div>

                                        <img src={"/content/svg/phone.svg"} alt={""} />
                                    </div>

                                    {/* Address */}
                                    <div className={"card-row address"}>
                                        <div className={"card-body"}>
                                            <p className={"c-lightSilver"}>Address</p>
                                            <p>{this.state.address}, {this.state.zipCode} {this.state.city}, {this.state.country}</p>
                                        </div>

                                        <img src={"/content/svg/phone.svg"} alt={""} />
                                    </div>
                                </div>
                            </div>

                            {/* Social Link */}
                            <div className={"profile-card"}>
                                <div className={"card-group"}>

                                    {this.state.socialLinks.map((item, i) => {
                                        return (
                                            <div key={i} className={`card-row ${item.type}`}>
                                                <div className={"card-body"}>
                                                    <p className={"c-lightSilver"}>{item.type.toLocaleUpperCase()}</p>
                                                    <a href={item.url} target={"_blank"} rel={"noreferrer"}>{item.title}</a>
                                                </div>

                                                <img src={item.icon} alt={""} />
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Detail Profile */}
                    <div className={"content-container"}>
                        <div className={"settings-form"}>
                            <div className={"setting-card"}>
                                <div className={"setting-header"}>
                                    <h2>Account</h2>
                                    <p className={"small-text"}>Update personal & contact information</p>
                                </div>
                                <div className={"setting-body"}>
                                    <ProfileForm user="" />
                                </div>
                            </div>

                            <div className={"setting-card"}>
                                <div className={"setting-header"}>
                                    <h2>Social network profiles</h2>
                                    <p className={"small-text"}>Update personal & contact information</p>
                                </div>
                                <div className={"setting-body"}>
                                    <SocialNetworkForm />
                                </div>
                            </div>

                            <div className={"setting-card"}>
                                <div className={"setting-header"}>
                                    <h2>Password</h2>
                                    <p className={"small-text"}>Update personal & contact information</p>
                                </div>
                                <div className={"setting-body"}>
                                    <PasswordForm />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Sidebar>
        )
    }
}
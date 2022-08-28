import React from "react";
import Sidebar from "../../components/Sidebar";
import ProfileForm from "../../components/forms/ProfileForm";
import PasswordForm from "../../components/forms/PasswordForm";
import SocialNetworkForm from "../../components/forms/SocialNetworkForm";

export default class UserProfileScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Sidebar>
                <div className={"content-wrapper"}>
                    
                    {/* Sidebar */}
                    <div className={"sidebar-header"}>
                        <div className={"profile-list"}>
                            <div className={"profile-card"}>
                                <div>
                                    <img src={"/content/img/avatar.png"} alt={""} />
                                </div>
                                
                                <div>
                                    <label>Garry Almeida</label>
                                </div>
                                
                                <button className={"btn btn-logout"}>Logout</button>
                            </div>

                            <div className={"profile-card"}>
                                <div className={"card-group"}>
                                    <div className={"card-row local-time"}>
                                        <div className={"card-body"}>
                                            <p className={"c-lightSilver"}>Local Time</p>
                                            <p>19:19</p>
                                        </div>

                                        <img src={"/content/svg/phone.svg"} alt={""} />
                                    </div>

                                    <div className={"card-row phone"}>
                                        <div className={"card-body"}>
                                            <p className={"c-lightSilver"}>Phone</p>
                                            <p>06 52 07 39 97</p>
                                        </div>

                                        <img src={"/content/svg/phone.svg"} alt={""} />
                                    </div>

                                    <div className={"card-row email"}>
                                        <div className={"card-body"}>
                                            <p className={"c-lightSilver"}>Email</p>
                                            <p>gary.almeida.work@gmail.com</p>
                                        </div>

                                        <img src={"/content/svg/phone.svg"} alt={""} />
                                    </div>

                                    <div className={"card-row address"}>
                                        <div className={"card-body"}>
                                            <p className={"c-lightSilver"}>Address</p>
                                            <p>189 rue Vercingétorix, 75014 Paris, France</p>
                                        </div>

                                        <img src={"/content/svg/phone.svg"} alt={""} />
                                    </div>
                                </div>
                            </div>

                            <div className={"profile-card"}>
                                <div className={"card-group"}>
                                    <div className={"card-row facebook"}>
                                        <div className={"card-body"}>
                                            <p className={"c-lightSilver"}>Facebook</p>
                                            <a href={"#fb"}>@fb</a>
                                        </div>

                                        <img src={"/content/svg/phone.svg"} alt={""} />
                                    </div>

                                    <div className={"card-row twitter"}>
                                        <div className={"card-body"}>
                                            <p className={"c-lightSilver"}>Twitter</p>
                                            <a href={"#tw"}>@tw</a>
                                        </div>

                                        <img src={"/content/svg/phone.svg"} alt={""} />
                                    </div>

                                    <div className={"card-row instagram"}>
                                        <div className={"card-body"}>
                                            <p className={"c-lightSilver"}>Instagram</p>
                                            <a href={"#inst"}>@inst</a>
                                        </div>

                                        <img src={"/content/svg/phone.svg"} alt={""} />
                                    </div>

                                    <div className={"card-row linkedin"}>
                                        <div className={"card-body"}>
                                            <p className={"c-lightSilver"}>Linkedin</p>
                                            <a href={"#in"}>@in</a>
                                        </div>

                                        <img src={"/content/svg/phone.svg"} alt={""} />
                                    </div>
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
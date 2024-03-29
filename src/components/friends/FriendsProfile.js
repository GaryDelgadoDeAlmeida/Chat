import React from "react";
import FriendForm from "../forms/FriendForm";

export default class FriendsProfile extends React.Component {

    render() {
        return (
            <div className={"friend-profile"}>
                <div className={"friend-profile-wrapper"}>
                    <div className={"profile"}>
                        <div className={"photo"}>
                            <img src={"/content/img/avatar.png"} alt={"avatar"} />
                        </div>
                        <div className={"info"}>
                            <p>{this.props.friend.firstname} {this.props.friend.lastname}</p>
                        </div>
                    </div>

                    <div className={"profile-form"}>
                        <div className={"profile-form-header"}>
                            <h2>About</h2>
                        </div>
                        <div className={"profile-form-content"}>
                            <FriendForm friend={this.props.friend} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
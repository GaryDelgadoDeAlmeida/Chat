import React from "react";

export default class UserHeader extends React.Component {

    render() {
        return (
            <div className={"user-profile"}>
                <div className={"profile-img"}>
                    <img src={"/content/img/avatar.png"} alt="Garry Almeida" />
                </div>
                <div className={"profile-username"}>
                    <span>Garry Almeida</span>
                    <span>gary.almeida.work@gmail.com</span>
                </div>
            </div>
        )
    }
}
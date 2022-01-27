import React from "react";

export default class UserHeader extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div class="user-profile">
                <div class="profile-img">
                    <img src={"/content/img/avatar.png"} alt="Garry Almeida" />
                </div>
                <div class="profile-username">
                    <span>Garry Almeida</span>
                    <span>gary.almeida.work@gmail.com</span>
                </div>
            </div>
        )
    }
}
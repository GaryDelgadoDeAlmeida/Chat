import React from "react";

export default class UserFooter extends React.Component {
    
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div class="user-settings">
                <a href="#account"><img src={"/content/svg/power-off.svg"} alt="sign-out" /></a>
                <a href="#discussion"><img src={"/content/svg/user-plus.svg"} alt="user-plus" /></a>
            </div>
        )
    }
}
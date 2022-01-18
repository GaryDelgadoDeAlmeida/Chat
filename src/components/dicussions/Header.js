import React from "react";

export default class Header extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div class="discussion-header">
                <div class="discussion-user">
                    <div class="discussion-img">
                        <img src="content/img/avatar.png" alt="Jacque Johnson" />
                    </div>
                    <div class="discussion-username">
                        <span>Jacque Johnson</span>
                    </div>
                </div>
                <div class="discussion-action">
                    <a href="#trash"><img src="content/svg/trash.svg" alt="" /></a>
                    <a href="#download"><img src="content/svg/download.svg" alt="" /></a>
                </div>
            </div>
        )
    }
}
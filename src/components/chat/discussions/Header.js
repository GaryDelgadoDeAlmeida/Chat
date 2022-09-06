import React from "react";

export default class Header extends React.Component {

    handleRemoveAction(e) {
        e.preventDefault()
        console.log("Hello handleRemoveAction")
    }

    handleDownloadDiscussionAction(e) {
        e.preventDefault()
        console.log("Hello handleDownloadDiscussionAction")
    }

    render() {
        return (
            <div className={"discussion-header"}>
                <div className={"discussion-user"}>
                    <div className={"discussion-img"}>
                        <img src={"/content/img/avatar.png"} alt="Jacque Johnson" />
                    </div>
                    <div className={"discussion-username"}>
                        <span>Jacque Johnson</span>
                    </div>
                </div>
                <div className={"discussion-action"}>
                    <a href="#trash" onClick={(e) => this.handleRemoveAction(e)}><img src={"/content/svg/trash.svg"} alt="" /></a>
                    <a href="#download" onClick={(e) => this.handleDownloadDiscussionAction(e)}><img src={"/content/svg/download.svg"} alt="" /></a>
                </div>
            </div>
        )
    }
}
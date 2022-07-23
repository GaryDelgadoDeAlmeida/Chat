import React from "react";

export default class Header extends React.Component {

    handleRemove(e) {
        e.preventDefault()
        console.log("Hello handleRemove")
    }

    handleDownloadDiscussion(e) {
        e.preventDefault()
        console.log("Hello handleDownloadDiscussion")
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
                    <a href="#trash" onClick={(e) => this.handleRemove(e)}><img src={"/content/svg/trash.svg"} alt="" /></a>
                    <a href="#download" onClick={(e) => this.handleDownloadDiscussion(e)}><img src={"/content/svg/download.svg"} alt="" /></a>
                </div>
            </div>
        )
    }
}
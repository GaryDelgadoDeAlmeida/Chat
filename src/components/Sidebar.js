import React from "react";
import { Link } from "react-router-dom";

export default class Sidebar extends React.Component {

    render() {
        return (
            <div className={"page-content"}>
                <div className={"flex-wrapper"}>
                    <header className={"sidebar"}>
                        <nav>
                            <ul>
                                <li>
                                    <Link to={"/chat"} title={"Chat"}>
                                        <img src={"/content/svg/speech-bubble.svg"} alt={"speech-bubble"} />
                                    </Link>
                                </li>
                                <li>
                                    <Link to={"/friends"} title={"Friends"}>
                                        <img src={"/content/svg/friends.svg"} alt={"friends"} />
                                    </Link>
                                </li>
                                <li>
                                    <Link to={"/profile"} title={"Profile"}>
                                        <img src={"/content/svg/avatar.svg"} alt={"avatar"} />
                                    </Link>
                                </li>
                                <li>
                                    <Link to={"/logout"} title={"logout"}>
                                        <img src={"/content/svg/power-off.svg"} alt="sign-out" />
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </header>

                    {this.props.children}
                </div>
            </div>
        )
    }
}
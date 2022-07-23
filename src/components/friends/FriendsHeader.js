import React from "react";
import { Link } from "react-router-dom";

export default class FriendsHeader extends React.Component {

    render() {
        return (
            <div className={"sidebar-header"}>
                <div className={"card-search"}>
                    <div className={"search-form"}>
                        <button><img src={"/content/svg/search.svg"} alt="" /></button>
                        <input type="text" name="searchUser" placeholder="Search a person" onChange={(e) => this.handleChange(e)} />
                    </div>
                </div>
                <div className={"card-list"}>
                    <Link className={"card"} to={"/friends/1"}>
                        <div className={"card-img"}>
                            <img src={"/content/img/avatar.png"} alt={""} />
                        </div>
                        <div className={"card-content"}>
                            <span className={"card-title"}>Garry ALMEIDA</span>
                        </div>
                    </Link>
                    <Link className={"card"} to={"/friends/2"}>
                        <div className={"card-img"}>
                            <img src={"/content/img/avatar.png"} alt={""} />
                        </div>
                        <div className={"card-content"}>
                            <span className={"card-title"}>Gary ALMEIDA</span>
                        </div>
                    </Link>
                    <Link className={"card"} to={"/friends/3"}>
                        <div className={"card-img"}>
                            <img src={"/content/img/avatar.png"} alt={""} />
                        </div>
                        <div className={"card-content"}>
                            <span className={"card-title"}>Gary DELGADO DE ALMEIDA</span>
                        </div>
                    </Link>
                </div>
            </div>
        )
    }
}
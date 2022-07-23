import React from "react";
import { Link } from "react-router-dom";

export default class UserDisucssion extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            users: [
                {
                    id: 1,
                    firstname: "Jacque",
                    lastname: "Johnson",
                    avatar: "/content/img/avatar.png",
                    lastMessage: "Thanks",
                    isCurrent: true
                },
                {
                    id: 2,
                    firstname: "Robert",
                    lastname: "Johnson",
                    avatar: "/content/img/avatar.png",
                    lastMessage: "No, That's wrong !"
                },
                {
                    id: 3,
                    firstname: "Solene",
                    lastname: "Sigma",
                    avatar: "/content/img/avatar.png",
                    lastMessage: "Hope you understand."
                },
                {
                    id: 4,
                    firstname: "Garry",
                    lastname: "DE ALMEIDA",
                    avatar: "/content/img/avatar.png",
                    lastMessage: "Do you need my help ?"
                },
                {
                    id: 5,
                    firstname: "Université",
                    lastname: "UPMC",
                    avatar: "/content/img/avatar.png",
                    lastMessage: "Know your position, you brat !"
                },
                {
                    id: 6,
                    firstname: "William",
                    lastname: "Dunbar",
                    avatar: "/content/img/avatar.png",
                    lastMessage: "..."
                },
                {
                    id: 7,
                    firstname: "Junior",
                    lastname: "Almeida",
                    avatar: "/content/img/avatar.png",
                    lastMessage: "Coucou"
                }
            ]
        };
    }

    render() {
        return (
            <div className={"users-list"}>
                {this.state.users.map(function(user, i) {
                    return (
                        <Link className={`user-block ${user.isCurrent === true ? "current-discussion" : ""}`} to={`/chat/${user.id}`} key={user.id}>
                            <div className={"user-img"}>
                                <img className={"img-rounded"} src={user.avatar} alt={`${user.firstname} ${user.lastname}`} />
                            </div>
                            <div className={"user-descr"}>
                                <span className={"user-name"}>{`${user.firstname} ${user.lastname}`}</span>
                                <span className={"user-lastmessage"}>{user.lastMessage}</span>
                            </div>
                        </Link>
                    )
                })}
            </div>
        )
    }
}
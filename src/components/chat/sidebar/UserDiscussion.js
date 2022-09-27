import React from "react";
import { Link } from "react-router-dom";
import { findSpecificParent } from "../../../functions/functions";

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

    handleClick(e) {
        e.preventDefault();
        let user_id;
        if(!e.target.className.includes("user-block")) {
            user_id = parseInt(findSpecificParent(e.target, "user-block").getAttribute("data-user_id"))
        } else {
            user_id = parseInt(e.target.getAttribute("data-user_id"));
        }
        
        let users = this.state.users.filter((element) => {
            if(element.id === user_id) {
                element.isCurrent = true
            } else {
                element.isCurrent = false
            }

            return element
        })

        this.setState({users: users})
    }

    render() {
        const userDisucssion = this;
        return (
            <div className={"users-list"}>
                {this.state.users.map(function(user, i) {
                    return (
                        <Link data-user_id={user.id} className={`user-block ${user.isCurrent === true ? "current-discussion" : ""}`} to={`/chat/${user.id}`} key={i} onClick={(e) => {e.preventDefault(); userDisucssion.handleClick(e)}}>
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
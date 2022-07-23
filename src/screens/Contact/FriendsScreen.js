import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "./../../components/Sidebar";
import FriendProfile from "./../../components/friends/FriendsProfile";

export default class FriendsScreen extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            friends: [
                {
                    id: 1,
                    photo: "/content/img/avatar.png",
                    firstname: "Garry",
                    lastname: "ALMEIDA"
                },
                {
                    id: 2,
                    photo: "/content/img/avatar.png",
                    firstname: "Gary",
                    lastname: "ALMEIDA"
                },
                {
                    id: 3,
                    photo: "/content/img/avatar.png",
                    firstname: "Gary",
                    lastname: "DELGADO DE ALMEIDA"
                },
                {
                    id: 4,
                    photo: "/content/img/avatar.png",
                    firstname: "Junior",
                    lastname: "ALMEIDA"
                }
            ],
            currentFriend: false
        }
    }

    findAllParents(element) {
        var els = [];
        while (element) {
            els.unshift(element);
            element = element.parentNode;
        }

        return els;
    }

    handleFriendProfile(e) {
        e.preventDefault();

        let parents = this.findAllParents(e.target)
        let friendProfile = this.state.friends.map(friend => {
            if(friend.id === e.target.getAttribute("data-friend")) {
                return friend
            }
        })

        if(friendProfile !== []) {
            this.setState({currentFriend: friendProfile});
        }
    }

    render() {
        return (
            <Sidebar>
                <div className={"content-wrapper"}>
                    
                    {/* Sidebar */}
                    <div className={"sidebar-header"}>
                        <div className={"card-search"}>
                            <div className={"search-form"}>
                                <button><img src={"/content/svg/search.svg"} alt="" /></button>
                                <input type="text" name="searchUser" placeholder="Search a person" onChange={(e) => this.handleChange(e)} />
                            </div>
                        </div>
                        <div className={"card-list"}>
                            {this.state.friends.map((friend, i) => {
                                return (
                                    <Link key={i} className={"card"} to={`/friends/${friend.id}`} data-friend={friend.id} onClick={(e) => this.handleFriendProfile(e)}>
                                        <div className={"card-img"}>
                                            <img src={friend.photo} alt={""} />
                                        </div>
                                        <div className={"card-content"}>
                                            <span className={"card-title"}>{friend.firstname} {friend.lastname}</span>
                                        </div>
                                    </Link>
                                )
                            })}
                        </div>
                    </div>
                    
                    {/* Content */}
                    {this.state.currentFriend && (
                        <FriendProfile />
                    )}
                </div>
            </Sidebar>
        )
    }
}
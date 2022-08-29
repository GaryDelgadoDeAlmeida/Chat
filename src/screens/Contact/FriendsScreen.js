import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "./../../components/Sidebar";
import { findSpecificParent } from "../../functions/functions";
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
                    lastname: "ALMEIDA",
                    email: "garry.almeida@gmail.com",
                    phone: "06 52 07 39 97"
                },
                {
                    id: 2,
                    photo: "/content/img/avatar.png",
                    firstname: "Gary",
                    lastname: "ALMEIDA",
                    email: "gary.almeida@gmail.com",
                    phone: "06 52 07 39 97"
                },
                {
                    id: 3,
                    photo: "/content/img/avatar.png",
                    firstname: "Gary",
                    lastname: "DELGADO DE ALMEIDA",
                    email: "garydelgadodealmeida@gmail.com",
                    phone: "06 52 07 39 97"
                },
                {
                    id: 4,
                    photo: "/content/img/avatar.png",
                    firstname: "Junior",
                    lastname: "ALMEIDA",
                    email: "junior.almeida@gmail.com",
                    phone: "06 52 07 39 97"
                }
            ],
            printProfile: false,
            currentFriend: [],
        }
    }

    handleFriendProfile(e) {
        e.preventDefault();

        let parent = findSpecificParent(e.target, "card")
        let friendProfile = [];

        if(parent !== "") {
            this.state.friends.map((friend) => {
                if(friend.id === parseInt(parent.getAttribute("data-friend"))) {
                    friendProfile = friend
                }
    
                return true
            })
        }

        if(friendProfile !== []) {
            this.setState({
                printProfile: true, 
                currentFriend: friendProfile
            });
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
                    {this.state.printProfile && this.state.currentFriend !== [] && (
                        <FriendProfile friend={this.state.currentFriend} />
                    )}
                </div>
            </Sidebar>
        )
    }
}
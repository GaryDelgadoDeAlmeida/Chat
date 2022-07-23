import React from "react";
import FriendsHeader from "../../components/friends/FriendsHeader";
import FriendsProfile from "../../components/friends/FriendsProfile";
import Sidebar from "./../../components/Sidebar";

export default class FriendsScreen extends React.Component {

    render() {
        return (
            <Sidebar>
                <div className={"content-wrapper"}>
                    {/* Sidebar */}
                    <FriendsHeader />
                    
                    {/* Content */}
                    <FriendsProfile />
                </div>
            </Sidebar>
        )
    }
}
import React from "react";
import Sidebar from "../../components/Sidebar";

export default class UserProfileScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Sidebar>
                <div>
                    <p>Profile screen page</p>
                </div>
            </Sidebar>
        )
    }
}
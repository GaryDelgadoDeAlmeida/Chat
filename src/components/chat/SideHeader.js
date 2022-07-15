import React from "react";
import SearchForm from "./../forms/SearchForm";
import UserHeader from './sidebar/UserHeader';
import UserDiscussion from './sidebar/UserDiscussion';
import UserFooter from './sidebar/UserFooter';

export default class SideHeader extends React.Component {

    render() {
        return (
            <div className={"chat-users"}>
    
                {/* Current user profile */}
                <UserHeader props={this.props} />
    
                {/* Search form */}
                <SearchForm />
    
                {/* Listing of users */}
                <UserDiscussion props={this.props} />
    
                {/* Settings */}
                <UserFooter props={this.props} />
            </div>
        )
    };
}
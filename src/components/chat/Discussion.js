import React from 'react';
import Header from './dicussions/Header';
import Messages from './dicussions/Messages';
import SendMessageForm from "./../forms/SendMessageForm";

export default class Discussion extends React.Component {
    
    render() {
        return (
            <div className={"chat-discussion"}>
                
                {/* Conversed used */}
                <Header props={this.props} />
                
                {/* Messages */}
                <Messages props={this.props} />
    
                {/* Send message */}
                <SendMessageForm props={this.props} />
            </div>
        )
    }
}
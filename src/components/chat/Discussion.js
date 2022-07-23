import React from 'react';
import Header from './discussions/Header';
import Messages from './discussions/Messages';
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
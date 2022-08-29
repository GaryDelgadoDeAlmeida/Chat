import React from "react";

export default class Notification extends React.Component {

    constructor(props) {
        super(props);
        this.icon = "";
        
        if(props.response.class === "success") {
            this.icon = "/content/svg/checkmark-green.svg";
        } else if(props.response.class === "information") {
            this.icon = "/content/svg/informationmark-gray.svg";
        } else if(props.response.class === "warning") {
            this.icon = "/content/svg/questionmark-yellow.svg";
        } else if(props.response.class === "danger") {
            this.icon = "/content/svg/closemark-red.svg";
        }

    }

    render() {
        return (
            <>
                <div className={`notification ${this.props.response.class}`}>
                    <div className={"icon"}>
                        <img src={this.icon} alt={"icon"} />
                    </div>
                    
                    <div className={"message"}>
                        <span>{this.props.response.message}</span>
                    </div>
                </div>
                <div>&nbsp;</div>
            </>
        )
    }
}
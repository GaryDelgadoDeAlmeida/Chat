import React from "react";

export default class Messages extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            messages: [
                {
                    user: 1,
                    message: "Hello"
                },
                {
                    user: 2,
                    message: "Hi !"
                },
                {
                    user: 1,
                    message: "How are you ?"
                },
                {
                    user: 2,
                    message: "Fine ?"
                },
                {
                    user: 1,
                    message: "Something happened ?"
                },
                {
                    user: 2,
                    message: "I'm currently researching the name of a bird species for a half-hours and I'm tired of searching !"
                },
                {
                    user: 1,
                    message: "I understand your feeling. Can you send me the picture of that bird ? I can help you."
                },
                {
                    user: 2,
                    message: "Yeah, i'll send you in a minute"
                },
                {
                    user: 2,
                    message: "Thanks"
                },
                {
                    user: 2,
                    message: "",
                    media: "/content/img/avatar.png"
                }
            ]
        }
    }

    render() {
        return (
            <div className={"discussion-panel"}>
                <div className={"discussion-block"}>
                    <div className={"discussion inverted"}>
                        <span>Hello</span>
                    </div>
                    <div className={"discussion ordered"}>
                        <span>Hi !</span>
                    </div>
                    <div className={"discussion inverted"}>
                        <span>How are you ?</span>
                    </div>
                    <div className={"discussion ordered"}>
                        <span>Fine ?</span>
                    </div>
                    <div className={"discussion inverted"}>
                        <span>Something happened ?</span>
                    </div>
                    <div className={"discussion ordered"}>
                        <span>I'm currently researching the name of a bird species for a half-hours and I'm tired of searching !</span>
                    </div>
                    <div className={"discussion inverted"}>
                        <span>I understand your feeling. Can you send me the picture of that bird ? I can help you.</span>
                    </div>
                    <div className={"discussion ordered"}>
                        <span>Yeah, i'll send you in a minute</span>
                    </div>
                    <div className={"discussion ordered"}>
                        <span>Thanks</span>
                    </div>
                    <div className={"discussion ordered"}>
                        <img src={"/content/img/avatar.png"} alt="" />
                    </div>
                    <div className={"discussion inverted"}>
                        <img src={"/content/img/avatar.png"} alt="" />
                    </div>
                    <div className={"discussion inverted"}>
                        <img src={"/content/img/avatar.png"} alt="" />
                    </div>
                    <div className={"discussion inverted"}>
                        <img src={"/content/img/avatar.png"} alt="" />
                    </div>
                    <div className={"discussion inverted"}>
                        <img src={"/content/img/avatar.png"} alt="" />
                    </div>
                </div>
            </div>
        )
    }
}
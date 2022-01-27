import React from "react";

export default class Messages extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div class="discussion-panel">
                <div class="discussion-block">
                    <div class="discussion inverted">
                        <span>Hello</span>
                    </div>
                    <div class="discussion ordered">
                        <span>Hi !</span>
                    </div>
                    <div class="discussion inverted">
                        <span>How are you ?</span>
                    </div>
                    <div class="discussion ordered">
                        <span>Fine ?</span>
                    </div>
                    <div class="discussion inverted">
                        <span>Something happened ?</span>
                    </div>
                    <div class="discussion ordered">
                        <span>I'm currently researching the name of a bird species for a half-hours and I'm tired of searching !</span>
                    </div>
                    <div class="discussion inverted">
                        <span>I understand your feeling. Can you send me the picture of that bird ? I can help you.</span>
                    </div>
                    <div class="discussion ordered">
                        <span>Yeah, i'll send you in a minute</span>
                    </div>
                    <div class="discussion ordered">
                        <span>Thanks</span>
                    </div>
                    <div class="discussion ordered">
                        <img src={"/content/img/avatar.png"} alt="" />
                    </div>
                    <div class="discussion inverted">
                        <img src={"/content/img/avatar.png"} alt="" />
                    </div>
                    <div class="discussion inverted">
                        <img src={"/content/img/avatar.png"} alt="" />
                    </div>
                    <div class="discussion inverted">
                        <img src={"/content/img/avatar.png"} alt="" />
                    </div>
                    <div class="discussion inverted">
                        <img src={"/content/img/avatar.png"} alt="" />
                    </div>
                </div>
            </div>
        )
    }
}
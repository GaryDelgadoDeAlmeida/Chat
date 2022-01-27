import React from "react";

export default class UserDisucssion extends React.Component {
    
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div class="users-list">
                <div class="user-block">
                    <div class="user-img">
                        <img class="img-rounded" src={"/content/img/avatar.png"} alt="" />
                    </div>
                    <div class="user-descr">
                        <span class="user-name">Robert Johnson</span>
                        <span class="user-lastmessage">No, That's wrong !</span>
                    </div>
                </div>

                <div class="user-block">
                    <div class="user-img">
                        <img class="img-rounded" src={"/content/img/avatar.png"} alt="" />
                    </div>
                    <div class="user-descr">
                        <span class="user-name">Robert Johnson</span>
                        <span class="user-lastmessage">No, That's wrong !</span>
                    </div>
                </div>

                <div class="user-block">
                    <div class="user-img">
                        <img class="img-rounded" src={"/content/img/avatar.png"} alt="" />
                    </div>
                    <div class="user-descr">
                        <span class="user-name">Robert Johnson</span>
                        <span class="user-lastmessage">No, That's wrong !</span>
                    </div>
                </div>

                <div class="user-block">
                    <div class="user-img">
                        <img class="img-rounded" src={"/content/img/avatar.png"} alt="" />
                    </div>
                    <div class="user-descr">
                        <span class="user-name">Robert Johnson</span>
                        <span class="user-lastmessage">No, That's wrong !</span>
                    </div>
                </div>

                <div class="user-block">
                    <div class="user-img">
                        <img class="img-rounded" src={"/content/img/avatar.png"} alt="" />
                    </div>
                    <div class="user-descr">
                        <span class="user-name">Robert Johnson</span>
                        <span class="user-lastmessage">No, That's wrong !</span>
                    </div>
                </div>

                <div class="user-block">
                    <div class="user-img">
                        <img class="img-rounded" src={"/content/img/avatar.png"} alt="avatar" />
                    </div>
                    <div class="user-descr">
                        <span class="user-name">Robert Johnson</span>
                        <span class="user-lastmessage">No, That's wrong !</span>
                    </div>
                </div>
            </div>
        )
    }
}
import SearchForm from "./forms/SearchForm";

export default function SideHeader() {

    return (
        <div class="chat-users">

            {/* Current user profile */}
            <div class="user-profile">
                <div class="profile-img">
                    <img src="content/img/avatar.png" alt="Garry Almeida" />
                </div>
                <div class="profile-username">
                    <span>Garry Almeida</span>
                    <span>gary.almeida.work@gmail.com</span>
                </div>
            </div>

            {/* Search form */}
            <SearchForm />

            {/* Listing of users */}
            <div class="users-list">
                <div class="user-block">
                    <div class="user-img">
                        <img class="img-rounded" src="content/img/avatar.png" alt="" />
                    </div>
                    <div class="user-descr">
                        <span class="user-name">Robert Johnson</span>
                        <span class="user-lastmessage">No, That's wrong !</span>
                    </div>
                </div>

                <div class="user-block">
                    <div class="user-img">
                        <img class="img-rounded" src="content/img/avatar.png" alt="" />
                    </div>
                    <div class="user-descr">
                        <span class="user-name">Robert Johnson</span>
                        <span class="user-lastmessage">No, That's wrong !</span>
                    </div>
                </div>

                <div class="user-block">
                    <div class="user-img">
                        <img class="img-rounded" src="content/img/avatar.png" alt="" />
                    </div>
                    <div class="user-descr">
                        <span class="user-name">Robert Johnson</span>
                        <span class="user-lastmessage">No, That's wrong !</span>
                    </div>
                </div>

                <div class="user-block">
                    <div class="user-img">
                        <img class="img-rounded" src="content/img/avatar.png" alt="" />
                    </div>
                    <div class="user-descr">
                        <span class="user-name">Robert Johnson</span>
                        <span class="user-lastmessage">No, That's wrong !</span>
                    </div>
                </div>

                <div class="user-block">
                    <div class="user-img">
                        <img class="img-rounded" src="content/img/avatar.png" alt="" />
                    </div>
                    <div class="user-descr">
                        <span class="user-name">Robert Johnson</span>
                        <span class="user-lastmessage">No, That's wrong !</span>
                    </div>
                </div>

                <div class="user-block">
                    <div class="user-img">
                        <img class="img-rounded" src="content/img/avatar.png" alt="avatar" />
                    </div>
                    <div class="user-descr">
                        <span class="user-name">Robert Johnson</span>
                        <span class="user-lastmessage">No, That's wrong !</span>
                    </div>
                </div>
            </div>

            {/* Settings */}
            <div class="user-settings">
                <a href="#account"><img src="content/svg/sign-out.svg" alt="sign-out" /><span>Logout</span></a>
                <a href="#discussion"><img src="content/svg/user-plus.svg" alt="user-plus" /><span>New discussion</span></a>
            </div>
        </div>
    );
}
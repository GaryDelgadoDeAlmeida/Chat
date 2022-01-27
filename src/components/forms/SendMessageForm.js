export default function SendMessageForm() {

    return (
        <div class="discussion-bar">
            <form method="post" action="#">
                <input type="text" name="message" placeholder="Message . . ." />
                <button><img src={"/content/svg/paper-plane.svg"} alt="paper-plane" /></button>
            </form>
        </div>
    );
}
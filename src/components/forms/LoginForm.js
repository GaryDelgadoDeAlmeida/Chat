export default function LoginForm() {

    return (
        <section class="login">
            <div class="login-wrapper">
                <div class="login-block">
                    <h2 class="login-title">Login</h2>
                    
                    <form class="login-form">
                        <input type="text" name="username" placeholder="Username" />
                        <input type="password" name="password" placeholder="Password" />
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </section>
    )
}
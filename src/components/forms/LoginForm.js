export default function LoginForm() {

    return (
        <section class="login">
            <form class="login-form" action="" method="POST">
                <h1>Login</h1>
                <input type="text" name="username" placeholder="Username" autocomplete="off" required/>
                <input type="password" name="password" placeholder="Password" autocomplete="off" required/>
                <input type="submit" value="Login"/>
            </form>
        </section>
    )
}
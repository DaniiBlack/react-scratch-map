function Login() {
    return (
        <form>
            <label>
                Email:
                <input type="email" required="true" name="email" />
            </label>
            <label>
                Password:
                <input type="password" required="true" name="password" />
            </label>
            <button type="submit" id="register">Login</button>
        </form>
    );
  }
  
  export default Login;
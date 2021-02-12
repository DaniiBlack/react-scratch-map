function Register() {
    return (
        <form>
            <label>
                First Name:
                <input required="true" name="firstName" />
            </label>
            <label>
                Last Name:
                <input required="true" name="lastName" />
            </label>
            <label>
                Email:
                <input type="email" required="true" name="email" />
            </label>
            <label>
                Password:
                <input type="password" required="true" name="password" />
            </label>
            <label>
                Confirm Password:
                <input type="password" required="true" name="confirmPassword"/>
            </label>
            <button type="submit" id="register">Submit</button>
        </form>
    );
  }
  
  export default Register;
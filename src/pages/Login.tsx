// LoginPanel.jsx
function LoginPanel() {
  return (
    <div className="login-panel">
      <h1>Squawky's Super Cool Gamez</h1>

      <div className="sections-container">
        <SignupSection />
        <LoginSection />
      </div>
    </div>
  );
}

function SignupSection() {
  return (
    <div className="section-box">
      <form id="loginForm" className="form">
        <h2>Sign Up</h2>

        <label htmlFor="username">Username:</label>
        <input type="text" name="username" required id="username" />

        <label htmlFor="gender">Gender:</label>
        <select name="gender" id="gender">
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
          <option value="prefer-not">Prefer not to say</option>
        </select>

        <button type="submit" className="button">
          Sign up with Google
        </button>
      </form>

      <div className="flex-center">
        <p className="status-message" id="loginStatusMessage"></p>
      </div>
    </div>
  );
}

function LoginSection() {
  return (
    <div className="section-box">
      <h2>Login</h2>

      <div className="flex-center">
        <button className="button" id="loginButton" type="submit">
          Login with Google
        </button>
      </div>
    </div>
  );
}

export default LoginPanel;

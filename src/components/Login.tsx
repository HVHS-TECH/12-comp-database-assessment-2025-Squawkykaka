function LoginPanel() {

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center">
      <h1 className="text-5xl font-bold mb-10">Squawky's Super Cool Gamez</h1>

      <div className="flex flex-wrap justify-center gap-10">
        <SignupSection />
        <LoginSection />
      </div>
    </div>
  )
}

function SignupSection() {
  return (
    <div className="bg-orange-400 p-10 rounded-2xl border-2 shadow-lg w-80 flex flex-col justify-between">
      <form id="loginForm" className="flex flex-col gap-4">
        <h2 className="text-3xl font-semibold mb-4">Sign Up</h2>

        <label htmlFor="username" className="text-left font-medium">Username:</label>
        <input
          type="text"
          name="username"
          required
          id="username"
          className="p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <label htmlFor="gender" className="text-left font-medium">Gender:</label>
        <select
          name="gender"
          id="gender"
          className="p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
          <option value="prefer-not">Prefer not to say</option>
        </select>

        <button type="submit" className="p-2 bg-blue-600 text-white border-4 border-blue-800 rounded-2xl hover:bg-blue-700 transition">
          Sign up with Google
        </button>
      </form>

      <div className="flex-grow flex items-center justify-center">
        <p className="text-red-800 italic pt-5" id="loginStatusMessage"></p>
      </div>
    </div>

  )
}

function LoginSection() {
  return (
    <div className="bg-orange-400 p-10 rounded-2xl border-2 shadow-lg w-80 flex flex-col justify-between">
      <h2 className="text-3xl font-semibold">Login</h2>

      <div className="flex-grow flex items-center justify-center">
        <button className="p-2 bg-blue-600 text-white border-4 border-blue-800 rounded-2xl hover:bg-blue-700 transition">
          Login with Google
        </button>
      </div>
    </div>
  );
}


export default LoginPanel

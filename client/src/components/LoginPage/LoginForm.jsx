import React from "react";

const LoginForm = () => {
  return (
    <div>
      <form className="login-form">
        <h2>User Login</h2>
        <input type="email" placeholder="Enter your Email"></input>
        <input type="password" placeholder="Enter your Password"></input>
        <button>Login</button>
      </form>
    </div>
  );
};

export default LoginForm;

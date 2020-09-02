import React from 'react';
import './Login.css'
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1000px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>

      <div className="login__container">
        <h1>Sign in</h1>
        <form>
          <h5>Email</h5>
          <input type="text" />
          <h5>Password</h5>
          <input type="text" />
          <button className="login_signInButton">Sign In</button>
        </form>
        <p>
          By Sign in, you agree to Amazon's Conditions of Use and Privacy Notice.
        </p>
        <button className="login_registerButton">Create yout Amazon Account</button>
      </div>
    </div>
  )
}

export default Login

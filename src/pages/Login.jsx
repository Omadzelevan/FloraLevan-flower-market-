import React from 'react';
import "../assets/styles/Login.css"

export default function Login() {
  return (
    <section className='login'>
      <div className="login-container">
        <h2>Login</h2>
        <form>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required />
          </div>
          <button type="submit">Login</button>
        </form>
        <p>Don't have an account? <a href="/signup">Sign up</a></p>
      </div>
      {/* <div className="signup-container">
        <h2>Sign Up</h2>
        <form>
          <div className="form-group">
            <label htmlFor="signup-email">Email:</label>
            <input type="email" id="signup-email" name="signup-email" required />
          </div>
          <div className="form-group">
            <label htmlFor="signup-password">Password:</label>
            <input type="password" id="signup-password" name="signup-password" required />
          </div>
          <button type="submit">Sign Up</button>
        </form>
      </div> */}
    </section>
  );
}
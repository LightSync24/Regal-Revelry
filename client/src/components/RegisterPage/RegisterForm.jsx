import React from 'react'

const RegisterForm = () => {
  return (
    <div>
      <form className='register-form'>
        <h2>User Sign Up</h2>
        <input type='text' placeholder='Enter Your Name'></input>
        <input type='email' placeholder='Enter Your Email'></input>
        <input type='password' placeholder='Password' ></input>
        <input type='password' placeholder='Confirm Password' ></input>
        <button>Register</button>
      </form>
    </div>
  )
}

export default RegisterForm
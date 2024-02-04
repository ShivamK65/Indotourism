import React from 'react'
import Login from './Login'

function Signup() {
  return (
    <div className='signup_page'>
        <div className='login-form'>
            <div className="form-box solid">
                <form >
                    <h1 className='Login-text'>Sign Up</h1>
                    <label>Username</label><br></br>
                    <input type='text' name='username' className="login-box"/><br></br>
                    
                    <label>Phone No.</label><br></br>
                    <input type='text' name='username' className="login-box"/><br></br>

                    <label>Email</label><br></br>
                    <input type='text' name='username' className="login-box"/><br></br>
      
      
                    <label>Password</label><br></br>
                    <input type='password' name='password' className="login-box"/><br></br>

                    <input type='submit' value="SIGNUP" className="login-btn" /><br></br>
                    <a href={<Login />}>LogIn</a>

                </form>
            </div>
        </div>
    </div>
  )
}

export default Signup
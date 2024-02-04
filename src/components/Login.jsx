import React from 'react'

function Login({isShowLogin}) {
  return (
    <div className={`${!isShowLogin ? "active":""} show`}>
        <div className='login-form'>
            <div className="form-box solid">
                <form >
                    <h1 className='Login-text'>Sign In</h1>
                    <label>Username</label><br></br>
                    <input type='text' name='username' className="login-box"/><br></br>
      
                    <label>Password</label><br></br>
                    <input type='password' name='password' className="login-box"/><br></br>

                    <input type='submit' value="login" className="login-btn" /><br></br>
                    <a href='./Login.jsx'>SignUp</a>

                </form>
            </div>
        </div>
    </div>
  )
}

export default Login
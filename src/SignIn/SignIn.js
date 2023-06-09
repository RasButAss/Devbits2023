import React,{useState} from 'react'
import './signin.css'
import { Link, Navigate } from 'react-router-dom'

const SignIn = () => {
  const [username, setusername] = useState('')
  const [password, setpassword] = useState('')
  const [authenticated, setauthenticated] = useState(localStorage.getItem(localStorage.getItem("authenticated")|| false));
  const [status , setStatus] = useState(null)
  function handleSubmit(e) {
    e.preventDefault();
    fetch('https://prachi003.pythonanywhere.com/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({user_name: username, password: password })
    }).then(res => res.json()).then(res => {
      if(res.status === 'loggedin') {
        sessionStorage.setItem("user_id",res.user_id)
        localStorage.setItem("authenticated", true)
        setauthenticated(true);
        setStatus(res.status);
      } else if (res.status === 'wrong credentials') {
        setauthenticated(false);
        setStatus(res.status);
      }
    })
    
  }
  return (
    <div className='login-main-div'>
      <div className='login-form'>
        <form classname='login-form-form' onSubmit={handleSubmit}>
          <h3>Login Here</h3>

          <label className='username-label' for="username">Username</label>
          <input className='username-input' type="text" placeholder="Username" id="username" value={username} onChange={(e) => {setusername(e.target.value)}} />

          <label className='username-lable' for="password">Password</label>
          <input className='username-input' type="password" placeholder="Password" id="password" value={password} onChange={(e) => {setpassword(e.target.value)}} />

          <button className='submit-btn-login' type='submit'>Log In</button>
          {status === "wrong credentials" ? <p>Invalid credentials entered!</p>: null}
          {authenticated ? <Navigate to="/dashboard" replace={true} />: null}
          <p>New to Weldright ? <Link to='/signup'>Sign Up</Link></p>
        </form>
      </div>
    </div>
    )
}

export default SignIn
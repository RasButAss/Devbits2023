import React, {useState} from 'react'
import './SignUp.css'
import { Link } from 'react-router-dom'

const SignUp = () => {
  const [username, setusername] = useState('')
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  function handleSubmit(e) {
    e.preventDefault();
    fetch('https://prachi003.pythonanywhere.com/sign_up_user', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({user_name: username, password: password, email_id: email})
  }).then(res => res.json()).then(res => console.log(res))
  }
  return (
    <div className='login-main-div'>
      <div className='login-form'>
        <form classname='login-form-form' onSubmit={handleSubmit}>
          <h3>Signup Here</h3>

          <label className='username-label signup' for="username">Username</label>
          <input className='username-input signup' type="text" placeholder="Username" id="username" value={username} onChange={(e) => {setusername(e.target.value)}} />

          <label className='username-label signup' for="username">Email</label>
          <input className='username-input signup' type="text" placeholder="Email" id="username" value={email} onChange={(e) => {setemail(e.target.value)}} />

          <label className='username-lable signup' for="password">Password</label>
          <input className='username-input signup' type="password" placeholder="Password" id="password" value={password} onChange={(e) => {setpassword(e.target.value)}} />

          <button className='submit-btn-login' type='submit'>Log In</button>
          <p>Already have an account ? <Link to='/login'>Login</Link></p>
        </form>
      </div>
    </div>
  )
}

export default SignUp
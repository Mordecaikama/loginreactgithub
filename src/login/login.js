import React, { useState } from 'react'

function LoginUpForm() {
  const [values, setValues] = useState({
    username: 'unknown@gmail.com',
    password: 'test123',
  })

  const { username, password } = values

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value })
  }

  function submit(e) {
    e.preventDefault()
    const user = { username }
  }

  return (
    <div className='form-container'>
      <div className='forms'>
        <h3>Login Forms</h3>
        <i className='fas fa-user-friends'></i>
        <form>
          <input
            type='text'
            className='username'
            placeholder='Username'
            value={username}
            onChange={handleChange('username')}
            required
          />

          <input
            type='password'
            className='password'
            placeholder='Password'
            value={password}
            onChange={handleChange('password')}
            required
          />
          <button className='btn loginBtn' onClick={submit}>
            Login
          </button>
          <div className='social-btns'>
            <button className='btn fb soc'>
              <i className='fab fa-facebook-square'></i>{' '}
              <span className='fb-text'>facebook</span>
            </button>
            <button className='btn goog soc'>
              <i className='fab fa-google-plus-g'></i>
              <span className='go-text'>Google</span>
            </button>
          </div>
          <div className='signup'>
            Dont have an account{' '}
            <button className='btn Lgsignup'>Sign Up</button>
          </div>
        </form>
        <i className='fas fa-window-close'></i>
      </div>
      {username && JSON.stringify(values.username)}
    </div>
  )
}

export default LoginUpForm

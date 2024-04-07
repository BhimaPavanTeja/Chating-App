import React from 'react';
import Banner from '../login-components/LoginBanner.png';
import GoogleIcon from '../login-components/google.png';
import FacebookIcon from '../login-components/Facebook.png';
import MicrosoftIcon from '../login-components/microsoft.png';
import './login.css';

const Login = () => {
  return (
    <div className='loginPage'>
      <img src={Banner} className='imgBanner' />
      <div className='loginDetails'>
        <div className='loginHeader'>
        <h1>Sign in or create an account</h1>
        <p>Then start chatting with app!</p>
        </div>
        <div className='google'>
          <img src={GoogleIcon} width={40} />
          <p>Continue with Google</p>
        </div>
        <div className='facebook'>
          <img src={FacebookIcon} width={40} />
          <p>Continue with Facebook</p>
        </div>
        <div className='microsoft'>
          <img src={MicrosoftIcon} width={40} />
          <p>Continue with Microsoft</p>
        </div>
      </div>
    </div>
  )
}

export default Login;

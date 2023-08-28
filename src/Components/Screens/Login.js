import React, { useState } from 'react'
import './Login.css'
import {createSearchParams, useNavigate} from 'react-router-dom'
import HomePage from '../HomePage'
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../Store/AuthSlice';
import { eventWrapper } from '@testing-library/user-event/dist/utils';

function Login() {
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const actions=authActions
  const [userName,setUserName]=useState('')
  const [password,setPassword]=useState('')
  const data=useSelector(state=>state.authSlice);
  const loginHandler=()=>{
    const creds={
      username:userName,
      password:password
    }
    dispatch(actions.addUser(creds))
    navigate("/homepage")
  }
  console.log('from Auth data');
  console.log(data)
  const userNameHandler=(event)=>{
    setUserName(event.target.value);
  }
  const passwordHandler=(event)=>{
    setPassword(event.target.value)
  }

  
  return (
    <div className='Login__page'>
    <div class="form-container">
        <form class="vertical-form">
            <img src='https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png?20220706172052'/>
            <input type="text" id="username" name="username" placeholder="Username" onChange={userNameHandler}/>
            
            <input type="password" id="password" name="password" placeholder="Password" onChange={passwordHandler}/>
            <h3 onClick={loginHandler}>Login</h3>
        </form>
    </div>
    </div>
  )
}

export default Login
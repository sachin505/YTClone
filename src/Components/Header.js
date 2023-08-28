import React from 'react'
import './Header.css'
import MenuIcon from '@mui/icons-material/Menu';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import VideoCallOutlinedIcon from '@mui/icons-material/VideoCallOutlined';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
import MicSharpIcon from '@mui/icons-material/MicSharp';
import { useDispatch, useSelector } from 'react-redux';
import { searchSliceActions } from './Store/SearchSlice';
import AuthSlice, { authActions } from './Store/AuthSlice';
function Header() {
    const dispatch=useDispatch();
    const actions=searchSliceActions;
    const inputHandler=(event)=>{
        dispatch(actions.addSearchText(event.target.value));
    }
   const stateUser=useSelector(state=>state.authSlice)
  return (
    <div className='header'>
        <div className='header__left'>
            <MenuIcon />
            <img className='header__logo' src="https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500"/>
        </div>
        <div className='header__input'>
                <input type='text' onBlur={inputHandler}/>
            <SearchOutlinedIcon className='header__inputButton'/>
            <MicSharpIcon className='header__mic'/>
        </div>
        <div className='header__icons'>
            <VideoCallOutlinedIcon />
            <AppsIcon />
            <NotificationsOutlinedIcon />
            {stateUser.username?stateUser.username:<AccountCircleTwoToneIcon />}
        </div>
        
    </div>
  )
}

export default Header;
import React from 'react'
import './SideNavBar.css'
import PortraitSharpIcon from '@mui/icons-material/PortraitSharp';
import HistorySharpIcon from '@mui/icons-material/HistorySharp';
import SlideshowSharpIcon from '@mui/icons-material/SlideshowSharp';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import ThumbUpOffAltOutlinedIcon from '@mui/icons-material/ThumbUpOffAltOutlined';
function SideNavBar() {
  return (
    <div className='SideNavBar'>
        <span className='SideNavBar__yourChannel'><PortraitSharpIcon/> <p>your channel</p></span>
        <span className='SideNavBar__history'><HistorySharpIcon/><p>History</p></span>
        <span className='SideNavBar__yourvideos'><SlideshowSharpIcon/><p>Your videos</p></span>
        <span className='SideNavBar__watchlater'><WatchLaterOutlinedIcon/><p>watch later</p></span>
        <span className='SideNavBar__likedvideos'><ThumbUpOffAltOutlinedIcon/><p>Liked Videos</p></span>
    </div>
  )
}

export default SideNavBar
import React from 'react'
import VideoCard from './VideoCard'
import './VideoList.css'
import { createSearchParams, useNavigate } from 'react-router-dom'


function VideosList(props) {
  const navigate=useNavigate();
  const showVideoSelected=(videoId)=>{
    navigate({
      pathname:'/videoplayer',
      search:createSearchParams({
        vid:videoId,
      }).toString()
    })
  }
  return (
    <div className='VideoList'>
        {props.videos?.map((prop,index)=><VideoCard content={prop} key={index} clicked={showVideoSelected}/>)}
    </div>
  )
}

export default VideosList
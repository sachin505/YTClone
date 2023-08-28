import React from 'react'
import './VideoPlayer.css'
import { useSearchParams } from 'react-router-dom'

function VideoPlayer() {
    const [searchParams]=useSearchParams();
    const videoSrc=`https://www.youtube.com/embed/${searchParams.get('vid')}`;
    
    
  return (
    <div className='VideoPlayer' >   
    <iframe  width="100%" height="70%" src={videoSrc} frameborder="0" allowfullscreen allow='autoplay'></iframe>
    </div>
  )
}

export default VideoPlayer
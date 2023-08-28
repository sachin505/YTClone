import React from 'react'
import './VideoCard.css'
import ThumbUpOffAltOutlinedIcon from '@mui/icons-material/ThumbUpOffAltOutlined';
import CommentIcon from '@mui/icons-material/Comment';
function VideoCard(props) {
  return (
    <div className='VideoCard' onClick={()=>props.clicked(props.content.id.videoId)}>
        <img src={`${props.content.snippet.thumbnails.high.url}`} className='VideoCard__image'/>
        <div className='VideoCard__details'>
            <h4 className='title'>{props.content.snippet.title}</h4>
            <div className='VideoCard__icons'>
                <ThumbUpOffAltOutlinedIcon />
                <CommentIcon />
            </div>
        </div>

    </div>
  )
}

export default VideoCard
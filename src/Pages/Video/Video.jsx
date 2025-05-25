import React from 'react'
import './Video.css'
import PlayVideo from '../../components/playVideo/PlayVideo'
import Recommended from '../../components/Recommended/Recommended'
import { useParams } from 'react-router-dom'

function Video() {
  const {videoId, categoryId} = useParams();
  return (
    <div className='play-container'>
      <PlayVideo videoId={videoId} categoryId={categoryId}/>
      <Recommended categoryId={categoryId}/>
    </div>
  )
}

export default Video

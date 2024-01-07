import React from 'react'
import VideoCard from './VideoCard'

const VideoContainer = () => {
  return (
    <div className='flex flex-wrap'>
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
    </div>
  )
}

export default VideoContainer
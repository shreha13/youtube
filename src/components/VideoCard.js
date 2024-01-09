import React from 'react'

const VideoCard = ({ item }) => {
  const {thumbnails, title, channelTitle} = item.snippet
  return (
    <div className='w-60 m-2 p-2 shadow-lg rounded-lg'>
      <img src={thumbnails.medium.url} alt="video-thumbnail" className='rounded-lg' />
      <div className='font-bold py-2'>{title}</div>
      <div className='font-size-'>{channelTitle}</div>
      <div>{item.statistics.viewCount} views</div>
    </div>
  )
}

export default VideoCard

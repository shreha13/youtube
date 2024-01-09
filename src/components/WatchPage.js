import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom'
import { closeMenu } from '../slice/appSlice';

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get('v');
  const dispatch = useDispatch();
  useEffect(() => { 
    dispatch(closeMenu())
  }, []);
  debugger;
  return (
    <iframe className='my-7' width="1200" height="600" src={`https://www.youtube.com/embed/${videoId}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
  )
}

export default WatchPage
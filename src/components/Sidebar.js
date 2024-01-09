import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const isMenuOpen = useSelector(state => state.app.isMenuOpen);

  if(!isMenuOpen) return null;
  return (
    <div className='w-48'>
      <ul className='pb-3 border-b-2 border-b-gray-200'>
        <Link to="/"><li>Home</li></Link>
        <li>Shorts</li>
        <li>Subscriptions</li>
      </ul>
      <h1 className='font-bold pt-3'>Subscriptions</h1>
      <ul className='pb-3 border-b-2 border-b-gray-200'>
        <li>Sports</li>
        <li>Movies</li>
        <li>Music</li>
      </ul>
      <h1 className='font-bold pt-3'>Watch Later</h1>
      <ul className='pb-3 border-b-2 border-b-gray-200'>
        <li>Sports</li>
        <li>Movies</li>
        <li>Music</li>
      </ul>
    </div>
  )
}

export default Sidebar;

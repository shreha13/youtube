import React from 'react'

const Header = () => {
  return (
    <div className='grid grid-flow-col'>
      <div className='flex col-span-1'>
        <i class="fa-solid fa-bars h-6"></i>
        <img src="https://www.edigitalagency.com.au/wp-content/uploads/Youtube-logo-png.png" alt="youtube-logo" className='pl-4 h-6' />
      </div>
      <div className='col-span-10 text-center'>
        <input type="text" placeholder='search' className='border-gray-300 border rounded-l-full w-1/2 p-2' />
        <button type='button' className='py-2 px-4 border border-gray-300 rounded-r-full bg-gray-300'><i class="fa-solid fa-magnifying-glass text-[#f1f1f1]"></i></button>
      </div>
      <div className='col-span-1'>
        <i class="fa-solid fa-circle-user h-6"></i>
      </div>
    </div>
  )
}

export default Header
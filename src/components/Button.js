import React from 'react'

const Button = ({children}) => {
  return (
    <button className='bg-gray-200 px-5 py-2 m-2 rounded-lg'>{children}</button>
  )
}

export default Button
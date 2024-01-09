import React from 'react'
import Button from './Button'

const buttons = ['All', 'Music', 'Movies', 'Gaming', 'Soccer', 'Interview', 'JavaScript', 'Algorithms', 'Live', 'News', 'Podcasts', 'History', 'Comedy', 'Recently uploaded']

const ButtonList = () => {
  return (
   <div>
    {buttons.map(btn => <Button key={btn}>{btn}</Button>)}
   </div> 
  )
}

export default ButtonList
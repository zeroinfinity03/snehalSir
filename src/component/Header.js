import React from 'react'

function Header({x}) {
  return (
    <>
    <div className=' bg-gray-500 flex justify-center py-4 font-bold text-xl'>
    <h1>This is a Header example</h1>
    <div className='ml-56'>{x}</div>
    </div>
    
    </>
    
  )
}

export default Header
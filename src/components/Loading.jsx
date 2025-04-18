import React from 'react'

const Loading = () => {
  return (
    <div className='flex items-center justify-center relative top-1/3'>
      <div className=' animate-spin border-t-transparent border-gray-500 rounded-full border-4 w-10 h-10 scale-150'></div>
    </div>
  )
}

export default Loading
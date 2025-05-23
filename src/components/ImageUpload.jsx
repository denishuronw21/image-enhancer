import React from 'react'

const ImageUpload = (props) => {

  const showImageHandler = (e)=>{
    const file = e.target.files[0];

    if(file) {
      props.uploadImageHandler(file)
    }
  };

  return (
    <div className='bg-white shadow-lg rounded-2xl w-full p-6 max-w-2xl'>
       <label htmlFor="fileInput" className='block w-full cursor-pointer border-2 border-dashed border-gray-300 text-center rounded-lg p-6 hover:border-blue-500 transition-all'>

        <input 
        type="file" 
        id='fileInput' 
        className='hidden' 
        onChange={showImageHandler} />

        <span className='text-lg font-medium text-gray-600'>Click & drag to upload your image</span>
        </label> 
        </div>
  )
}

export default ImageUpload
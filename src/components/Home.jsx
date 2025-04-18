import React, { useState } from 'react'
import ImageUpload from './ImageUpload'
import ImagePreview from './ImagePreview'

const Home = () => {

  const [uploadImage,setUploadImage] = useState(null);
  const [enhancedImage,setEnhancedImage] = useState(null);
  const [loading,setLoading] = useState(false);

  const uploadImageHandler = (file)=>{
    setUploadImage(URL.createObjectURL(file))
    setLoading(true)
  }

  return (
    <>
    <ImageUpload uploadImageHandler={uploadImageHandler} />
    <ImagePreview 
    loading={loading} 
    upload={uploadImage} 
    enhanced={enhancedImage} />
    </>
  )
}

export default Home
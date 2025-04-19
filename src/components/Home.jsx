import React, { useState } from 'react'
import ImageUpload from './ImageUpload'
import ImagePreview from './ImagePreview'
import { enhancedImageAPI } from '../utils/enhancedImageAPI';

const Home = () => {

  const [uploadImage,setUploadImage] = useState(null);
  const [enhancedImage,setEnhancedImage] = useState(null);
  const [loading,setLoading] = useState(false);

  const uploadImageHandler = async (file)=>{
    setUploadImage(URL.createObjectURL(file))
    setLoading(true);

    try {
      const enhancedURL = await enhancedImageAPI(file);
      setEnhancedImage(enhancedURL);
      setLoading(false)
    } catch (error) {
      console.log(error)
      alert("Error while enhancing the message. Please try again later!!!")
    }
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
import React from 'react'
import Loading from './Loading'

const ImagePreview = (props) => {
    
    return (
        <div className='mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl'>
            <div className='bg-white shadow-lg rounded-xl overflow-hidden'>
                <h2 className='text-xl font-semibold text-center bg-gray-800 text-white py-2'>Original Image</h2>

                
                { props.upload ? <img src={props.upload} alt="" className='w-full h-full object-cover' /> : <div className='flex items-center justify-center bg-gray-200 h-80'>
                    No Image Selected
                </div> }
                

                
            </div>

            <div className='bg-white shadow-lg rounded-xl overflow-hidden'>
                <h2 className='text-xl font-semibold text-center bg-blue-800 text-white py-2'>Enhanced Image</h2>


                {props.enhanced && !props.loading (
                    <img src="" alt="" className='w-full h-full object-cover' />
                )}

                {props.loading ? <Loading /> : <div className='flex items-center justify-center bg-gray-200 h-80'>
                    No Enhanced Image
                </div> }
                
                
            </div>
        </div>
    )
}

export default ImagePreview
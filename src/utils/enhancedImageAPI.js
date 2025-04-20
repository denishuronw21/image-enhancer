import axios from "axios";

const BASE_URL = "https://techhk.aoscdn.com/"
const API_KEY = "Your API Key"
const MAX_RETRIES = 20;

export const enhancedImageAPI = async (file) =>{
    
    try {
        const taskId = await uploadImage(file);
        console.log("Image Uploaded Successfully, Task Id:", taskId);

        const enhancedImageData = await pollForEnhancedImage(taskId);
        console.log("Enhanced Image Data", enhancedImageData)
        
        return enhancedImageData;
        
    } catch (error) {
        console.log("Error enhancing image:", error.message)
    }
}

const uploadImage = async (file) =>{

const formData = new FormData();
formData.append("image_file",file)

const {data} = await axios.post(`${BASE_URL}/api/tasks/visual/scale`, formData, {
    headers : {
        "Content-Type": "multipart/form-data",
        "X-API-KEY": API_KEY
    }
})

if(!data?.data?.task_id){
    throw new Error("Failed to upload image! Task Id not found");
}

return data.data.task_id

}

const pollForEnhancedImage = async (taskId, retries = 1) =>{
    const result = await fetchEnhancedImage(taskId);

    if(result.state === 4){
        console.log(`Processing...(${retries}/${MAX_RETRIES})`);

        if(retries >= MAX_RETRIES){
            throw new Error("Max retires reached! Please try again later")
        }

        // wait 2 seconds
    await new Promise((resolve) => setTimeout(resolve,2000))

    return pollForEnhancedImage(taskId, retries + 1)
    }

    console.log("Enhanced image url:",result)
    return result;
    
}

const fetchEnhancedImage = async (taskId)=> {

    const {data} = await axios.get(`${BASE_URL}/api/tasks/visual/scale/${taskId}`, {
        headers : {
            
            "X-API-KEY": API_KEY
        }
    })

    if(!data?.data){
        throw new Error("Failed to enhanced image! Image not found");
    }
    
    return data.data;
}

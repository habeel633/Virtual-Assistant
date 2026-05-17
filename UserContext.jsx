import axios from 'axios'
import React, { createContext, useEffect } from 'react'
export const userDataContext=createContext()
function UserContext({children}) {
    const serverUrl="http://localhost:5000"
    const [userData,setUserData]=React.useState(null)
 const [frontendImage,setFrontendImage]=React.useState(null)
  const [backendImage,setBackendImage]=React.useState(null)
  const [selectedImage,setSelectedImage]=React.useState(null)
    const handleCurrentUser=async ()=>{
        try {
            const result=await axios.get(`${serverUrl}/api/user/current`,{withCredentials:true})
            setUserData(result.data)
            console.log(result.data)
        } catch (error) {
            console.log(error?.response?.data)
        }
    }

    useEffect(()=>{
        handleCurrentUser()
    },[])
    const value={
        serverUrl,userData,setUserData,backendImage,setBackendImage,frontendImage,setFrontendImage,selectedImage,setSelectedImage
    }
  return (
    <div>
    <userDataContext.Provider value={value}>
      {children}
      </userDataContext.Provider>
      </div>
    
  )
}

export default UserContext

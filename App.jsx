import React, { useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import Customize from './pages/Customize'
import Customize2 from './pages/Customize2'
import { userDataContext } from './context/userContext'
import Home from './pages/Home'

function App() {
  const [userData, setUserData] = useState(null);
  const [backendImage, setBackendImage] = useState(null);
  const [frontendImage, setFrontendImage] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const serverUrl = "http://localhost:5000";
  return (
    <userDataContext.Provider
    value={{ serverUrl, userData, setUserData, backendImage, setBackendImage, frontendImage, setFrontendImage, selectedImage, setSelectedImage }}>
  
    <Routes>
      <Route path='/' element={(userData?.assistantImage && userData?.assistantName)? <Home/> :<Navigate to={"/customize"}/>}/>
      <Route path='/signup' element={!userData?<SignUp/>:<Navigate to={"/customize"}/>}/>
      <Route path='/signin' element={!userData?<SignIn/>:<Navigate to={"/"}/>}/>
      <Route path='/customize' element={userData?<Customize/>:<Navigate to={"/signup"} /> } />
      <Route path='/customize2' element={userData?<Customize2/>:<Navigate to={"/signup"} /> } />
    </Routes>
    <Customize />
    </userDataContext.Provider>
  );
}

export default App

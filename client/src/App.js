import {BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import './App.css';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { useContext } from 'react';
import { AuthContext } from './context/Authcontext';

function App() {
  const {currentuser}=useContext(AuthContext);
  
   const ReqAuth=({children})=>{
    return currentuser ? (children): <Navigate to="/login"/>
   }
  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route path='/'/>
          <Route index element={<ReqAuth><Home/></ReqAuth>}/>
          <Route path='/login' element={<Login/>} user={currentuser}/>
          <Route path='/signup' element={<Signup/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

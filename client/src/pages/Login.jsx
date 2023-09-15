import React, { useContext, useState } from 'react'
import { styled } from 'styled-components'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/Authcontext';
export default function Login(props) {
  const [email,setEmail]=useState();
  const [password,setPassword]=useState();
  const nav =useNavigate();
  
  const {dispatch}=useContext(AuthContext)

  async function handlesubmit(){
    const auth = getAuth();
    await(
      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
     const user = userCredential.user;
     dispatch({type:"LOGIN", payload: user})
     nav('/')
     setEmail()
     setPassword()
  })
  .catch((error) => {
    const errorMessage = error.message;
    alert(errorMessage)
  })

    );
    
}

  return (
    <Log>
       <h1> Sign In </h1>
       <form >
        <input type='email' placeholder='Enter your E-mail' onChange={(e)=>setEmail(e.target.value)}/>
        <input type='password' placeholder='Enter yor Password' onChange={(e)=>setPassword(e.target.value)}/>
        <p>Don't have an account? Signup </p>
        <input type="button" value="Sign In" onClick={handlesubmit} />
        
       </form>
    </Log>
  )
}
const Log= styled.div`
background: rgba(255, 255, 255, 0.8);
width: 25vw;
height: 50vh;
box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
border-radius: 20px;
h1{
  position: relative;
  top :1.5rem;
  
  }
  form{
    display: grid;
    align-items: center;
    justify-content: center;
    position: relative;
    gap: 5vh;
    top: 5.5rem;
    input{
      width: 15vw;
      outline: none;
      padding: 15px;
      background: none;
      border: none;
      outline: none;
      border-bottom: 2px solid #C850C0;
    }
    input[type=button]{
      position: relative;
      left: 1em;
      background-image: linear-gradient(43deg, #4158D0 0%,#C850C0 46%, #FFCC70 100%);
      border: none;
      color: white;
      font-size: 1rem;
      border-radius: 15px;
      cursor: pointer;
    }
  }
`
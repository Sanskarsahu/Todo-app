/* eslint-disable no-template-curly-in-string */
import axios from 'axios';
import React, { useState } from 'react'
import { styled } from 'styled-components'

export default function Addtask(props) {
  const [Lable, setLable] = useState();
  const [Duedate, setDuedate] = useState();
  const [Completed] = useState(false);
  const [User,setUser]=useState()
  
  const newTask = () => {
    setUser(props.uid)
    axios.post("http://localhost:3001/tasks", {
      label: Lable,
      due_date: Duedate,
      user:User,
      isCompleted: Completed
    })
    props.setTrigger(false);
  
 }
  return (props.trigger) ? (
    <Addnew>
      <div className="card">
        <button onClick={() => props.setTrigger(false)} >x</button>
        <h1>
          Add New Task
        </h1>
        <div className="fields">
          <input type="text" placeholder='Name of the task' onChange={(event) => setLable(event.target.value)} />
          <input type="date" placeholder='Due date' onChange={(event) => setDuedate(event.target.value)} />
          <div className='bttn'><input className='btn' type="button" value="submit" onClick={newTask} /></div>
        </div>
      </div>
    </Addnew>
  ) : "";
}
const Addnew = styled.div`
 background-color: rgba(0,0,0,0.9);
 position: absolute;
 top:0;
 left: 0;
 height: 100vh;
 width: 100vw;
 .card{
  width: 25vw;
  height: 50vh;
  position:relative;
  inset: 25% 36%;
  background-color: white;
  border-radius:10px;
  button{
    position: absolute;
    right: 1.5vw;
    top: 0.5vh;
    border: none;
    background: transparent;
    font-size: 2rem;
  }
  h1{
    padding-top: 1.5rem;
    
    
  }
  .fields{
    display: grid;
    align-items: center;
    justify-content: center;
    position: relative;
    gap: 5vh;
    top: 5.5rem;
    input,select{
      width: 15vw;
      outline: none;
      padding: 15px;
    }
    select{
      width:16.8vw;
    }
    .btn{
      background-image: linear-gradient(43deg, #4158D0 0%,#C850C0 46%, #FFCC70 100%);
      border: none;
      color: white;
      font-size: 1rem;
      border-radius: 15px;
      cursor: pointer;
    }
    .btn:hover{
      
    }
   
  }
 }
`
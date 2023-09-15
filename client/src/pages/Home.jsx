import { styled } from 'styled-components';
import Tasks from '../components/Tasks';
import { useContext } from 'react';
import { AuthContext } from '../context/Authcontext';

function Home(p) {
  const {dispatch}=useContext(AuthContext)
  const handleclick=()=>{
    dispatch({type:"LOGOUT"})
  }
  return (
    <div >
    <button onClick={handleclick}>Log Out</button>
      <Heading>
            <h1>
                To Do's List
            </h1>
            <h2>
                for website project
            </h2>
            
        </Heading>
      <Tasks uid={p.uid}/>
    </div>
  );
}

export default Home;
const Heading = styled.div`
color:white;
margin-bottom: 1em;
  h1{
    
    font-size: 4rem;
  }
`
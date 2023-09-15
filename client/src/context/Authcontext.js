import{createContext,useEffect,useReducer } from "react";
import Authreducer from './Authreducer';

const INITIAL_STATE={
    currentuser: JSON.parse(localStorage.getItem("user")) || null,
};

export const AuthContext= createContext(INITIAL_STATE);
export const AuthContextProvider =({children})=>{
    const [state,dispatch]=useReducer(Authreducer, INITIAL_STATE);

    useEffect(()=>{
        localStorage.setItem("user",JSON.stringify(state.currentuser));
    },[state.currentuser]); 

return(
    <AuthContext.Provider value={{currentuser: state.currentuser , dispatch}}>
        {children}
    </AuthContext.Provider>
)
};
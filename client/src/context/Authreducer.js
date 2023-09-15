const Authreducer = (state,action)=>{
    switch(action.type){
        case "LOGIN":{
            return {
                currentuser:action.payload,
            };
        }
        case "LOGOUT":{
            return{
                currentuser:null,
            };
        }
        default :
          return state;
    }
}
export default Authreducer;
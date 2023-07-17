import { useReducer,createContext,useEffect } from "react";

export  const userContext = createContext();

export const userReducer = (state,action) =>{
    switch(action.type){
        case "LOGIN":
            return {user : action.payload};
        case "LOGOUT":
            return {user:null};
        default:
            return state;
    }
}

export const UserContextProvider = ({children}) =>{
    const [state,dispatch] = useReducer(userReducer,{
        user : null
    })

    useEffect( () => {
        const user = JSON.parse(localStorage.getItem('user'));
        if(user){
            dispatch({type:'LOGIN',payload:user});
        }
    }, []);

    console.log("context state:",state);

    return(
        <userContext.Provider value= {{...state,dispatch}}>
            {children}
        </userContext.Provider>
    )
}
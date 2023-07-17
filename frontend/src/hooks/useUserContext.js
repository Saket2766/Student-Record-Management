import { useContext } from "react";
import { userContext } from "../contexts/userContext";

export const useUserContext = () =>{
    const context = useContext(userContext);

    if(!context){
        throw Error("userContext must be used inside the userContextProvider")
    }

    return context;
}


import { useState } from "react";
import { useUserContext } from "./useUserContext";

export const useLogin = () => {
    const [error,setError] = useState('');
    const [isLoading,setIsLoading] = useState(false);

    const {dispatch} = useUserContext();

    const login = async(username,password) => {
        //loading user
        setIsLoading(true);

        //fetching user from api
        const response = await fetch('/api/user/login', {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({username,password})
        });

        const data = await response.json();

        if(!response.ok){
            setIsLoading(false);
            setError(data.error);

        }else{
            //add user to local storage
            localStorage.setItem('user',JSON.stringify(data));
            //update global state
            dispatch({type:"LOGIN",payload: data});
            //finish loading
            setIsLoading(false);
        }
    }
    return {login,error,isLoading};
}



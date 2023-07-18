import { useUserContext } from "./useUserContext";

export const useLogout = () => {
    const {dispatch} = useUserContext();
    
    const logout = () =>{
        //clear state
        dispatch({type:"LOGOUT"});
        //remove from local storage
        localStorage.removeItem('user');
    }

    return {logout};
    
}
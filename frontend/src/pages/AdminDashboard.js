import { useEffect, useRef, useState } from "react";
import "../styles/adminDashboard.css";
import CreateUser from '../components/CreateUser';
import ManageUser from "../components/ManageUser";
import { useLogout } from "../hooks/useLogout";

const AdminDashboard = () => {
    //check which sections to display
    const [isCreateHidden, setIsCreateHidden] = useState(false);
    const [isManageHidden, setIsManageHidden] = useState(true);
    const [isChangePasswordHidden, setIsChangePasswordHidden] = useState(true);
    
    //get reference to the elements
    const createUser = useRef();
    const manageUser = useRef();
    const changePassword = useRef();

    //functions to show the different components
    const showCreateUser = () =>{
        setIsCreateHidden(false);
        setIsManageHidden(true);
        setIsChangePasswordHidden(true);
    }

    const showManageUser = () =>{
        setIsCreateHidden(true);
        setIsManageHidden(false);
        setIsChangePasswordHidden(true);
    }

    const showChangePassword = () =>{
        setIsCreateHidden(true);
        setIsManageHidden(true);
        setIsChangePasswordHidden(false);
    }

    const {logout} = useLogout(); 

    useEffect(()=>{
        const updateHidden = () => {
            if(isCreateHidden){
                createUser.current.classList.add("hidden");
            }else{
                createUser.current.classList.remove("hidden");
            }
    
            if(isManageHidden){
                manageUser.current.classList.add("hidden");
            }else{
                manageUser.current.classList.remove("hidden");
            }
    
            if(isChangePasswordHidden){
                changePassword.current.classList.add("hidden");
            }else{
                changePassword.current.classList.remove("hidden");
            }
        }

        updateHidden();
    },[isCreateHidden,isChangePasswordHidden,isManageHidden]);
    
    return (
        <div className="admin-main">
            <div className="admin-sidebar">
                <div className="sidebar-nav">
                    <div className="profile-bg">
                        <img src="/user-circle-thin.svg" alt="profile"/>
                    </div>
                    <div className="button-container">
                        <button onClick={showCreateUser}>Create User</button>
                        <button onClick={showManageUser}>Manage Users</button>
                    </div>
                    <div className="option-container">
                        <button onClick={showChangePassword}><img src="/gear-thin.svg" alt="settings" /></button>
                        <button onClick={logout}><img src="/x.svg" alt="logout"/></button>
                    </div>
                </div>
            </div>

            <section className="admin-section">
                <div className="create-user" ref={createUser}>
                    <CreateUser/>
                </div>
                <div className="manage-users" ref={manageUser}>
                    <ManageUser/>
                </div>
                <div className="change-password" ref={changePassword}>
                    <h1>Change Password</h1>
                </div>  
            </section>
        </div>    
    );
}

export default AdminDashboard;
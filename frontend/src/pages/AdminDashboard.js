import { useEffect, useRef, useState } from "react";
import "../styles/adminDashboard.css";
import CreateUser from '../components/CreateUser';
import ManageUser from "../components/ManageUser";

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
                <ul className="sidebar-nav">
                    <li><button onClick={showCreateUser}>Create User</button></li>
                    <li><button onClick={showManageUser}>Manage Users</button></li>
                    <li><button onClick={showChangePassword}>Change Password</button></li>
                </ul>
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
import { useRef, useState } from "react";
import { useRegister } from "../hooks/useRegister";

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [organisation, setOrganisation] = useState('');
    const [isUserFilled,setIsUserFilled] = useState(false);
    const userRef = useRef(); 
    const orgRef = useRef(); 
    const defaultUserData = {
        username : '',
        password : '',
        role : '',
        orgName : '',
    }
    const defaultOrgData ={
        orgName : '',
        programs : '',
    }
    const defaultProgramData={
        progName : '',
        courses : []
    }

    const [userData,setUserData] = useState(defaultUserData);
    const [orgData,setOrgData] = useState(defaultOrgData);
    const [programData,setProgramData] = useState(defaultProgramData);

    const { register, error, isLoading } = useRegister();

    const handleSubmit = async (e) => {
        e.preventDefault();

        await register(username, password, organisation);
    }

    const handleNext = (e) =>{
        e.preventDefault();
        setIsUserFilled(true);
    }

    const handleUserChange = (event) => {
        const {name,value} = event;
        setUserData({
            ...userData,
            [name] : value,
        });
    }
    const handleProgramChange = (event) => {
        const {name,value} = event;
        setProgramData({
            ...userData,
            [name] : value,
        });
    }
    const handleOrgChange = (event) => {
        const {name,value} = event;
        setOrgData({
            ...userData,
            [name] : value,
        });
        setUserData({
            ...userData,
            [name] : value,
        });
    }
    

    return ( 
        <section className="login-main">
            <div className="row">
                <h2 className="login-heading">{isUserFilled ? "Add Program" : "Register"}</h2>
            </div>

            { isUserFilled ? 
                <form ref={orgRef} onSubmit={handleSubmit} className="login-form">
                    <label>Program Name</label>
                    <input type="text" name="progName" value={programData.progName} onChange={handleProgramChange}/>
                    <label>Add Course</label>
                    <input type="password" name="password" value={userData.password} onChange={handleUserChange}/>
                    <label>Name of Organisation</label>
                    <input type="text" name="orgName" value={userData.orgName} onChange={handleOrgChange}/>
                    <button disabled={isLoading} >Next</button>
                {error && <p className="error">{error}</p>}
            </form>
            : 
                <form ref={userRef} onSubmit={handleNext} className="login-form">
                    <label>Username</label>
                    <input type="text" name="username" value={userData.username} onChange={handleUserChange}/>
                    <label>Password</label>
                    <input type="password" name="password" value={userData.password} onChange={handleUserChange}/>
                    <label>Name of Organisation</label>
                    <input type="text" name="orgName" value={userData.orgName} onChange={handleOrgChange}/>
                    <button disabled={isLoading} >Next</button>
                    {error && <p className="error">{error}</p>}
                </form>}
            <section className="login-background"></section>
        </section>
     );
}
 
export default Register;
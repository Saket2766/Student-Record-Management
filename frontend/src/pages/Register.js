import { useState } from "react";
import { useRegister } from "../hooks/useRegister";

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [organisation, setOrganisation] = useState('');
    const defaultUserData = {
        username : '',
        password : '',
        role : '',
        orgName : '',
    }
    const defaultOrgData ={
        
    }

    const [userData,setUserData] = useState(defaultUserData);
    const [orgData,setOrgData] = useState(defaultOrgData);

    const { register, error, isLoading } = useRegister();

    const handleSubmit = async (e) => {
        e.preventDefault();

        await register(username, password, organisation);
    }

    return ( 
        <section className="login-main">
            <div className="row">
                <h2 className="login-heading">Register</h2>
            </div>
            <form onSubmit={handleSubmit} className="login-form">
                <label>Username</label>
                <input type="text" value={username} onChange={(e) => { setUsername(e.target.value) }}/>
                <label>Password</label>
                <input type="password" value={password} onChange={(e) => { setPassword(e.target.value) }}/>
                <label>Name of Organisation</label>
                <input type="text" value={organisation} onChange={(e) => { setOrganisation(e.target.value) }}/>
                <button disabled={isLoading} >Register</button>
                {error && <p className="error">{error}</p>}
            </form>
            <section className="login-background"></section>
        </section>
     );
}
 
export default Register;
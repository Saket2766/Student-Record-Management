import { useState } from 'react';
import '../styles/home.css'
import { useLogin } from '../hooks/useLogin';

const Home = () => {
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
 
    const {login,error,isLoading} = useLogin();

    const handleSubmit = async(e) =>{
        e.preventDefault();

        await login(username,password);
    }

    return ( 
        <div className='main'>
            <img src="/online_test.svg" alt="Computer Screen" className='svg' />

            <h1 className='hero-heading'>Start Improving.<br/>Stop Ignoring.</h1>

            <div className="panel">
                <form onSubmit={handleSubmit} className='login'>
                    <fieldset>
                        <legend>Log In</legend>
                        <label>Username:</label>
                        <input type="text" value={username} onChange={(e) =>{setUsername(e.target.value)}} />
                        <label>Password:</label>
                        <input type="password" value={password} onChange={(e) =>{setPassword(e.target.value)}} />
                        { error && <p className='error'>{error}</p>}
                        <center><button disabled={isLoading}>Log In</button></center>
                    </fieldset>
                   
                </form>
                
            </div>
        </div>
     );
}

export default Home;
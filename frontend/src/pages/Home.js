import { useState } from 'react';
import '../styles/home.css'

const Home = () => {
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = (e) =>{
        e.preventDefault();
    }

    return ( 
        <div className='main'>
            <img src="/online_test.svg" alt="Computer Screen" className='svg' />

            <h1>Start Improving. Stop Ignoring.</h1>

            <div className="panel">
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <legend>Log In</legend>
                        <label>Username:</label>
                        <input type="text" value={username} onChange={(e) =>{setUsername(e.target.value)}} />
                        <label>Password:</label>
                        <input type="password" value={password} onChange={(e) =>{setPassword(e.target.value)}} />
                        { error && <p className='error'>{error}</p>}
                        <center><button>Log In</button></center>
                    </fieldset>
                   
                </form>
                
            </div>
        </div>
     );
}

export default Home;
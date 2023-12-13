import "../styles/login.css";
import { useState } from 'react';
import { useLogin } from '../hooks/useLogin';


const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const { login, error, isLoading } = useLogin();

    const handleSubmit = async (e) => {
        e.preventDefault();

        await login(username, password);
    }

    return ( 
        <section className="login-main">
            <div className="row">
                <h2 className="login-heading">Login</h2>
            </div>
            <form onSubmit={handleSubmit} className="login-form">
                <label>Username</label>
                <input type="text" value={username} onChange={(e) => { setUsername(e.target.value) }}/>
                <label>Password</label>
                <input type="password" value={password} onChange={(e) => { setPassword(e.target.value) }}/>
                <button disabled={isLoading} >Login</button>
                {error && <p className="error">{error}</p>}
            </form>
            <section className="login-background"></section>
        </section>
     );
}
 
export default Login;
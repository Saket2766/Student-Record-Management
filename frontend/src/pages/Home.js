import { useState } from 'react';
import '../styles/home.css'
import { useLogin } from '../hooks/useLogin';

const Home = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const { login, error, isLoading } = useLogin();

    const handleSubmit = async (e) => {
        e.preventDefault();

        await login(username, password);
    }

    return (
        <>
            <section className="hero">
                <div className="content">
                    <h1 className='heading'>CHECK YOUR PROGRESS</h1>
                    <h2 className="sub-heading">Check your progress quickly and conveniently from any anywhere on any device.</h2>
                    <p className='trust-text'>Trusted by millions around the world</p>
                    <div className="space">
                        <button className='cta'>Join Now!</button>
                        <img src="/hero.svg" alt="Man Accessing Dashboard" className="hero-svg" />
                    </div>
                </div>   
            </section>
        </>
    );
}

export default Home;
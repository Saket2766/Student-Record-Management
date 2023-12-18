import '../styles/home.css'
import { Link } from 'react-router-dom';
import Navbar from "../components/Navbar";

const Home = () => {
    
    return (
        <>
            <Navbar/>
            <section className="hero">
                <div className="content">
                    <h1 className='heading'>CHECK YOUR PROGRESS</h1>
                    <h2 className="sub-heading">Check your progress quickly and conveniently from any anywhere on any device.</h2>
                    <p className='trust-text'>Trusted by millions around the world</p>
                    <div className="space">
                        <button className='cta'><Link to="/register">Join Now!</Link></button>
                        <img src="/hero.svg" alt="Man Accessing Dashboard" className="hero-svg" />
                    </div>
                </div>   
            </section>
        </>
    );
}

export default Home;
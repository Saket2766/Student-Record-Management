import '../styles/home.css'
import { Link } from 'react-router-dom';
const Home = () => {
    return ( 
        <div className='main'>
            <img src="/online_test.svg" alt="Computer Screen" className='svg' />
            <div className="panel">
                <h1>Track Your Excellence</h1>
                <h2>Start Today!</h2>
                <Link to ="/login">Start</Link>
            </div>
        </div>
     );
}

export default Home;
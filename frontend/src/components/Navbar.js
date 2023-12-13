import { useUserContext } from "../hooks/useUserContext";
import {useLogout} from '../hooks/useLogout';
import { Link } from "react-router-dom";

const Navbar = () => {
    const context = useUserContext();
    const {logout} = useLogout();
    return ( 
        <header>
            <div className="nav-wrapper">
                <div className="Logo">
                    <img src="/icon.svg" alt="Clipboard with check mark" className="icon"></img>
                    <div>Grade Check</div>
                </div>
                <nav>
                    <ul>
                        { context.user && <li><button onClick={logout}>Log Out</button></li> }
                        { !context.user && <li><button><Link to="/register">Register</Link></button></li>}
                        { !context.user && <li><button><Link to="/login">Login</Link></button></li>}
                    </ul> 
                </nav>
            </div>    
        </header>
     );
}

export default Navbar;
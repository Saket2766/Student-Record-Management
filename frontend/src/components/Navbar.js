import { useUserContext } from "../hooks/useUserContext";
import {useLogout} from '../hooks/useLogout';

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
                    </ul> 
                </nav>
            </div>    
        </header>
     );
}

export default Navbar;
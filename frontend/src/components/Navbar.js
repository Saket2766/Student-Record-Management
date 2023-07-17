import { Link } from "react-router-dom";
import { useUserContext } from "../hooks/useUserContext";

const Navbar = () => {
    const {role} = useUserContext();
    console.log("navbar",role);
    return ( 
        <header>
            <div className="nav-wrapper">
                <div className="Logo">
                    <img src="/icon.svg" alt="Clipboard with check mark" class="icon"></img>
                    <div>Grade Check</div>
                </div>
                <nav>
                    <ul>
                        {role && <li><Link to ='/logout' >Log Out</Link></li>}
                    </ul> 
                </nav>
            </div>    
        </header>
     );
}

export default Navbar;
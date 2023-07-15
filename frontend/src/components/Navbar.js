import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <header>
            <div className="nav-wrapper">
                <div className="Logo">
                    <img src="/icon.svg" alt="Clipboard with check mark" class="icon"></img>
                    <div>Grade Check</div>
                </div>
                <nav>
                    <ul>
                        <li><Link to ='/login' >Log In</Link></li>
                        <li><Link to ='/signup' >Sign Up</Link></li>
                    </ul> 
                </nav>
            </div>    
        </header>
     );
}

export default Navbar;
import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <header>
            <div className ="Logo">
                Grade Check
            </div>
            <nav>
                <Link to ='/login' >Log In</Link>
                <Link to ='/signup' >Sign Up</Link>
            </nav>
        </header>
     );
}

export default Navbar;
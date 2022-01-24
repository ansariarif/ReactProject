import { NavLink } from "react-router-dom";
import "./NavBar.css";
import HomeIcon from '@mui/icons-material/Home';

let NavBar=()=>{
    return(
        <nav className="Nav">
             <NavLink to="/students/showall"><HomeIcon></HomeIcon></NavLink> 
            <NavLink to="/students/showall">Show Students</NavLink>
            <NavLink to="/students/add">Add  Student</NavLink> 
           
        </nav>
    );
}

export default NavBar;
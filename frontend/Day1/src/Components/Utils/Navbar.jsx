import "../../assets/css/Navbar.css";
import { Link } from "react-router-dom";
import { AiOutlineUser } from 'react-icons/ai';


const Navbar = () =>{

    return(
        <div>
            <div className="nav-bar">
                <div className="title-text">FIESTA</div>
                <Link style={{textDecoration: "none"}} to="/"><div style={{marginLeft:"450px"}} className="nav-text">HOME</div></Link>
                <Link style={{textDecoration: "none"}} to="/event"><div className="nav-text">EVENTS</div></Link>
                <Link style={{textDecoration: "none"}} to="/sell"><div className="nav-text">GALLERY</div></Link>
                {/* <Link style={{textDecoration: "none"}} to="/signup"><div className="nav-text">SIGN UP</div></Link> */}
                <Link style={{textDecoration: "none"}} to="/contactUs"><div className="nav-text">CONTACT US</div></Link>
                <Link style={{textDecoration: "none"}} to="/login"><div className="nav-text">LOGIN</div></Link>
                <Link to="/profile" style={{marginLeft: "300px", marginTop: "20px", color: "#1c3b70"}}><AiOutlineUser size={25}/></Link>
            </div>
        </div>
    )
}
export default Navbar;
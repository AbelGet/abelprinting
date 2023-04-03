import { NavLink } from "react-router-dom";
import logo from './images/abelLogo.png';
import bar from './images/bar.png'

const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="allNav">
                <div className="logo">
                    <NavLink to="/">
                        <img src={logo} alt="" className="logopic" />
                    </NavLink>
                </div>
                <div className="links">  
                            
                    <NavLink exact to="/">Home</NavLink>
                    <NavLink to="/Products">Products</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                    <NavLink to="/about">About</NavLink>
                </div>
                <div>
                    <button className="bar">
                        <img src={bar} alt="" />
                    </button>
                </div>
            </div>
        </nav>
    );
}
export default NavBar;
import { NavLink } from "react-router-dom";
import {useRef} from 'react';
import logo from './images/abelLogo.png';
import bar from './images/bar.png'
import closebtn from './images/closebtn.png'

const NavBar = () => {
    const navRef = useRef();
    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }

    document.getElementsByClassName("body").onclick = () => {
        navRef.current.classList.toggle("responsive_nav");

    }

    return (
        <nav className="navbar">
            <div className="allNav">
                <div className="logo">
                    <NavLink to="/">
                        <img src={logo} alt="" className="logopic" />
                    </NavLink>
                </div>
                <div className="links" ref={navRef}>
                    <NavLink exact to="/">Home</NavLink>
                    <NavLink to="/Products">Products</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                        <img src={closebtn} alt="" />
                    </button>
                </div>
                <div>
                    <button className="nav-btn" onClick={showNavbar}>
                        <img src={bar} alt="" />
                    </button>
                </div>
            </div>
        </nav>
    );
}
export default NavBar;
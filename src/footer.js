import logoFooter from './images/abelLogo.png';
import location from './images/icon/location.png';
import email from './images/icon/email.png';
import mobile from './images/icon/mobile.png';
import website from './images/icon/website.png';
import telphone from './images/icon/telphone.png';
import { NavLink } from "react-router-dom";

const Footer = () => {
    return ( 
    <div className="footer">
            <div className="companyTitle">
                <div className="companyLogo">
                    <img src={logoFooter} alt="logofooter" />
                </div>
                <div className="companyName">
                    <div className="amharic">
                        <h3>
                            አቤል የህትመትና ማስታወቂያ ሥራ <br />
                            Abel Printing & Advertising Work
                        </h3>
                    </div>
                </div>
            </div>
            <div className="footerContent">
                <div className="footerProduct">
                    <ul>
                        <li>
                            <h3>
                                Product
                            </h3>
                        </li>
                        <li>Agenda Printing</li>
                        <li>Brosher Printing</li>
                        <li>T-shirt Printing</li>
                        <li>Calendar Printing</li>
                        <li>Magazine Printing</li>
                    </ul>
                </div>
                <div className="footerLinks">  
                    <ul>
                        <li>
                            <h3>
                                Link
                            </h3>
                        </li>
                        <li>
                            <NavLink exact to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/Products">Products</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact">Contact</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about">About</NavLink>
                        </li>
                    </ul>
                </div>
                <div className="footerContact">
                    <div>
                        <ul>
                            <li>
                                HayaHulet Mazoria Rebecca BLDG.
                                <img src={location} alt="" />
                            </li>
                            <li>
                                +251-11-636-2041
                                <img src={telphone} alt="" />
                            </li>
                            <li>
                                +251-930-003-3807 +251-911-604-482
                                <img src={mobile} alt="" />
                            </li>
                            <li>
                                abeladvert@yahoo.com getumrt2435@gmail.com
                                <img src={email} alt="" />
                            </li>
                            <li></li>
                            <li>
                                www.abeladvert.com
                                <img src={website} alt="" />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="copywrite">
                Copy Write &copy; Abel Printing & Advertising Work, All Rights Reserved
            </div>
    </div>
    );
}   
export default Footer;
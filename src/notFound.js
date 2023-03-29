import notFound from './images/404_page.png';
import { NavLink } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="contentNotFound">
            <img src={notFound} alt="404" />
            <h2>
            YOU MAY HAVE FOLLOWED A BAD LINK, OR THIS LINK MAY HAVE EXPIRED
            </h2>
            <h3>
                Go back to <NavLink exact to="/">Home</NavLink>
            </h3>
    </div>
    );
}
export default NotFound;
//Home should go to home page with all components
//About should go to Chicago backstory comp
//Menu should go to Specials page
import { Link } from "react-router-dom";



const Nav = () => {
    return (
        <nav>
            {/* <nav>This is Nav</nav> */}
            {/* <img src="../images/LittleLemonLogo.jpeg" id ="mainLogo" alt="Logo"/> */}
            <ul className="headerNav">
                <li><img src="../images/LittleLemonLogo.jpeg" id="siteLogo" alt="Logo" /></li>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/menu">Menu</Link></li>
                <li><Link to="/reservations">Reservations</Link></li>
                <li><Link to="/#">Order Online</Link></li>
                <li><Link to="/#">Login</Link></li>
            </ul>
        </nav>

    )
}
export default Nav;
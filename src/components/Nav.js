//Home should go to home page with all components
//About should go to Chicago backstory comp
//Menu should go to Specials page
import { Link } from "react-router-dom";


const Nav =()=>{
    return (
    <nav>
         {/* <nav>This is Nav</nav> */}
         {/* <img src="../images/LittleLemonLogo.jpeg" id ="mainLogo" alt="Logo"/> */}
            <ul className="headerNav">
                <li><img src="../images/LittleLemonLogo.jpeg" id ="siteLogo" alt="Logo"/></li>
                <li><Link href="/#">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link href="/#">Menu</Link></li>
                <li><Link href="/#">Reservations</Link></li>
                <li><Link href="/#">Order Online</Link></li>
                <li><Link href="/#">Login</Link></li>
            </ul>
    </nav>

    )
}
export default Nav;
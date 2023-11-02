//Home should go to home page with all components
//About should go to Chicago backstory comp
//Menu should go to Specials page
import { Link } from "react-router-dom";
// import Main from "./Main";
//import BookingPage from "./BookingPage";



const Nav = () => {

//   const handleClick =(e)=>{
//     e.preventDefault();
//     console.log("Link was clicked");
//     };

    return (
        <>
        <nav>
            <ul className="headerNav">
                <li><img src="../images/LittleLemonLogo.jpeg" id="siteLogo" alt="Logo" /></li>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/menu">Menu</Link></li>
                {/* <li><Link to="/reservations" onClick={handleClick} >Reservations</Link></li> */}
                <li><Link to="/reservations" >Reservations</Link></li>
                <li><Link to="/#">Order Online</Link></li>
                <li><Link to="/#">Login</Link></li>
            </ul>
        </nav>
        </>
    )
}
export default Nav;
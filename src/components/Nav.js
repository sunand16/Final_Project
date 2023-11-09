//Home should go to home page with all components
//About should go to Chicago backstory comp
//Menu should go to Specials page


import { useEffect } from "react";
import { Link } from "react-router-dom";
// import {HashLink as Link} from "react-router-hash-link";
// import Main from "./Main";
//import BookingPage from "./BookingPage";



const Nav = () => {
       const handleClick=(e)=>{
        console.log(e.target.id+"link clicked");
      let element=e.target.id;
        console.log(element);
        document.querySelector(element).scrollIntoView({
            behavior:"smooth"
        });
    }
    useEffect(() => {
        window.history.scrollRestoration = 'manual'}, []);

    return (
        <>
            <nav>
                <ul className="headerNav">
                    <li><img src="../images/LittleLemonLogo.jpeg" id="siteLogo" alt="Logo" /></li>
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="#about" id='#about'  onClick={handleClick}>About</Link></li>
                    <li><Link to="#menu" id='#menu' onClick={handleClick}>Menu</Link></li>
                    <li><Link to="/booking" >Reservations</Link></li>
                    <li><Link to="/#">Order Online</Link></li>
                    <li><Link to="/#">Login</Link></li>
                </ul>
            </nav>
        </>
    )
}
export default Nav;
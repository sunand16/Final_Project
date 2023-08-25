const Nav =()=>{
    return (
    <nav>
         {/* <nav>This is Nav</nav> */}
         {/* <img src="../images/LittleLemonLogo.jpeg" id ="mainLogo" alt="Logo"/> */}
            <ul className="headerNav">
                <li><img src="../images/LittleLemonLogo.jpeg" id ="siteLogo" alt="Logo"/></li>
                <li><a href="/#">Home</a></li>
                <li><a href="/#">About</a></li>
                <li><a href="/#">Menu</a></li>
                <li><a href="/#">Reservations</a></li>
                <li><a href="/#">Order Online</a></li>
                <li><a href="/#">Login</a></li>
            </ul>
    </nav>

    )
}
export default Nav;
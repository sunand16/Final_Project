const Footer = () => {
    return (
        <footer>
            {/* <footer>This is Footer</footer> */}
            {/* <img src="../images/LittleLemonLogo.jpeg" id ="footerLogo" alt="FooterLogo"></img> */}
            {/* <ul className="footerNav">
            <li> <img src="../images/LittleLemonLogo.jpeg" id ="footerLogo" alt="FooterLogo"></img></li>
            <li>
                <ul className="footerNavSection">
                <li id="footerSectionHeading">Doormat Navigation</li>
                <li><a href="/#">Home</a></li>
                <li><a href="/#">About</a></li>
                <li><a href="/#">Menu</a></li>
                <li><a href="/#">Reservations</a></li>
                <li><a href="/#">Order Online</a></li>
                <li><a href="/#">Login</a></li>
                </ul>
            </li>
            <li>
                <ul className="footerNavSection">
                <li id="footerSectionHeading">Contact</li>
                <li><a href="/#">Address</a></li>
                <li><a href="/#">Phone Number</a></li>
                <li><a href="/#">Email</a></li>
                </ul>
            </li>
            <li>
                <ul className="footerNavSection" >
                <li id="footerSectionHeading">Social Media Links</li>
                <li><a href="/#">Facebook</a></li>
                <li><a href="/#">Instagram</a></li>
                <li><a href="/#">Twitter</a></li>
                </ul>
            </li>

        </ul> */}


            <div className="footerNav">
                <img src="../images/FooterLogo.png" id="footerLogo" alt="FooterLogo"></img>
                <ul>

                    <li id="footerSectionHeading">Doormat Navigation</li>
                    <li><a href="/#">Home</a></li>
                    <li><a href="/#">About</a></li>
                    <li><a href="/#">Menu</a></li>
                    <li><a href="/#">Reservations</a></li>
                    <li><a href="/#">Order Online</a></li>
                    <li><a href="/#">Login</a></li>

                </ul>
                {/* </div> */}
                {/* <div className="footerNav"> */}
                <ul>

                    <li id="footerSectionHeading">Contact</li>
                    <li><a href="/#">Address</a></li>
                    <li><a href="/#">Phone</a></li>
                    <li><a href="/#">Email</a></li>

                </ul>
                {/* </div> */}
                {/* <div className="footerNav"> */}
                <ul>

                    <li id="footerSectionHeading">Social Media Links</li>
                    <li><a href="/#">Facebook</a></li>
                    <li><a href="/#">Instagram</a></li>
                    <li><a href="/#">Twitter</a></li>

                </ul>
            </div>
        </footer>

    )
}
export default Footer;
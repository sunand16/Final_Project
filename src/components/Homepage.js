// include all components in order over here to display as a home page <Nav,specials,CustomerSay,Chicago,Footer>
//Home button in NAV should redirect to this page
//All components will be added here and this acts as the home page

import Footer from "./Footer";
import Header from "./Header";
//import Main from "./Main";
import CallToAction from "./CallToAction";
import Specials from "./Specials";
import CustomerSay from "./CustomersSay";
import Chicago from "./Chicago";


const HomePage =()=>{
return(
    <>
    <Header/>
    <CallToAction/>
    <Specials/>
    <CustomerSay/>
    <Chicago/>
    <Footer/>
    </>
)

}

export default HomePage;
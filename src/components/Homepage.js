// include all components in order over here to display as a home page <Nav,specials,CustomerSay,Chicago,Footer>
//Home button in NAV should redirect to this page
//All components will be added here and this acts as the home page


import CallToAction from "./CallToAction";
import Specials from "./Specials";
import CustomersSay from "./CustomersSay";
import Chicago from "./Chicago";
// import Main from "./Main";



const HomePage = () => {
    return (
        <>
            {/* <Main/> */}
            <CallToAction />
            <Specials />
            <CustomersSay />
            <Chicago />
        </>
    )

}

export default HomePage;
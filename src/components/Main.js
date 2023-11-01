//Add routing in this comp
//Need to add routing for each page like <Home(default),About,Menu,BookingPage, etc., > as a URL based
import { Routes, Route } from "react-router-dom";
import Chicago from "./Chicago";
import Specials from "./Specials";
import CustomersSay from "./CustomersSay";
import BookingPage from "./BookingPage";
import Nav from "./Nav";



const Main = () => {
    return (
        <main>
        <Nav/>
            <Routes>
                <Route path="/" element />
                <Route path="/menu" element={<Specials />} />
                <Route path="/about" element={<Chicago />} />
                <Route path="/reservations" element={<BookingPage />} />
                <Route path="/testimonals" element={<CustomersSay />} />
            </Routes>
        </main>
    )
}
export default Main;
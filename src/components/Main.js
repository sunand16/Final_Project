//Add routing in this comp
//Need to add routing for each page like <Home(default),About,Menu,BookingPage, etc., > as a URL based
import { Routes, Route } from "react-router-dom";
import HomePage from "./Homepage";
import BookingPage from "./BookingPage";



const Main = () => {
    return (
        <div id="MainSection">

            <Routes>
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/home" element={<HomePage />}></Route>
                <Route path="/booking" element={<BookingPage />} />
            </Routes>


        </div>
    )
}
export default Main;
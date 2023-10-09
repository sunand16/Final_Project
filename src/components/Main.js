//Add routing in this comp
//Need to add routing for each page like <Home(default),About,Menu,BookingPage, etc., > as a URL based
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Homepage";
import Chicago from "./Chicago";
import Specials from "./Specials";
import CustomersSay from "./CustomersSay";

const Main =()=>{
    return (
        <div className="NavigationRouting">
            <div>
            <BrowserRouter>
            <Routes>
               <Route path="/" element={<HomePage />}></Route>
               <Route path="/booking" element={<BookingPage />}></Route>
               <Route path="/about" element={<Chicago/>}></Route>
               <Route path="/specials" element={<Specials/>}></Route>
               <Route path="/testimonals" element={<CustomersSay/>}></Route>
            </Routes>
            </BrowserRouter>
            </div>
        </div>
    )
}
export default Main;
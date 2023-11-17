//Should be a re-direct page for RESERVE A TABLE button in CallToAction Component
import BookingForm from "./BookingForm";
import React from "react";
import { useState } from "react";

const BookingPage = () => {

    //const [availableTimes , setAvailableTimes ] = useState([]);

    // const handleChange=()=>{
    //     setAvailableTimes(availableTimes);
    // }
    // const updateTimes =() => {
    //     return availableTimes;

    // }
    // const initializeTimes =()=> {

    // }
    return (
        <>
            <div className="BookingPage" >
                <div>
                    <h2>Find a table for any occasion</h2>
                    <div id="bookingImageSection">
                        <img src="../images/reservations.jpg"></img>
                        <img src="../images/reservations.jpg"></img>
                    </div>

                </div>
                <div>
                    <BookingForm 
                    // availableTimes
                    // updateTimes={handleChange}
                    />
                </div>
            </div>
        </>
    )
}

export default BookingPage;

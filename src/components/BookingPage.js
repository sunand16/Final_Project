//Should be a re-direct page for RESERVE A TABLE button in CallToAction Component
import BookingForm from "./BookingForm";
import React from "react";
import { useState } from "react";

const BookingPage = () => {

    const [availableTimes , setAvailableTimes ] = useState([]);
    
    const handleClick = () => {
        setAvailableTimes(['17:00', '18:00', '19:00', '20:00', '21:00','21.30', '22:00']);
    }

    const updateTimes =() => {
        return  setAvailableTimes(['17:00', '18:00', '19:00', '20:00', '21:00','21.30', '22:00']);

    }
    const initializeTimes =()=> {
        availableTimes([]);
    }
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
                    times={availableTimes}
                    setTimes={setAvailableTimes}
                    handleTimes={handleClick}
                    />
                </div>
            </div>
        </>
    )
}

export default BookingPage;

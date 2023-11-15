//Should be a re-direct page for RESERVE A TABLE button in CallToAction Component
import BookingForm from "./BookingForm";
import React from "react";

const BookingPage = () => {
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
                    <BookingForm />
                </div>
            </div>
        </>
    )
}

export default BookingPage;

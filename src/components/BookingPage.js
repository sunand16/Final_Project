//Should be a re-direct page for RESERVE A TABLE button in CallToAction Component
import BookingForm from "./BookingForm";
import React from "react";

const BookingPage = () => {
    return (
        <React.Fragment>
            <div className="BookingPage">
                <h2>Welcome to the BookingPage, Please go ahead and make the required Reservations</h2>
                <BookingForm />
            </div>
        </React.Fragment>
    )
}

export default BookingPage;

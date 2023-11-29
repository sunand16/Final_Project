import React from "react";
import { useState } from "react";



const BookingForm = ({ times, handleDateChange, updatedTimes }) => {

    const [chooseDate, setDate] = useState("");
    // const [availableTimes, setAvailableTimes] = useState([]);
    const [guests, setGuests] = useState("");
    const [occasion, setOccassion] = useState("");

   console.log(updatedTimes);
    //console.log("updatedTimes:" + Array.isArray(updatedTimes));

    let availableTimes = Array.from(times);
    // console.log(availableTimes);
    // const newAvailableTimes = [updatedTimes];

    const handleTimesClick = () => {
        //     console.log("times:" + Array.isArray(times));
        //    console.log("availableTimes:" + Array.isArray(availableTimes));
        const newAvailableTimes = [updatedTimes];
        console.log("inside handleTimesClick:" + (newAvailableTimes));

        if (newAvailableTimes.length === 0) {
            return availableTimes;
        }
        else {
            return availableTimes = newAvailableTimes;
        }

        // handleTimes();
        // retrieveTimes();
        // handleTimes(); 
        // handleDateChange();    
    }

    const handleDateUpdates = (e) => {
        const selectedDate = e.target.value;
        console.log(selectedDate);
        setDate(selectedDate);
        handleDateChange(selectedDate);
    }

    // const handleClick = () => {
    // setAvailableTimes(['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']);
    // }

    const clearForm = () => {
        setDate("");
        // setAvailableTimes([]);
        setGuests("1");
        setOccassion("Birthday");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("");
        clearForm();
    };

    return (
        <>
            <div className="form-section" >
                <form onSubmit={handleSubmit}>
                    <fieldset id="formOptions">
                        <div id="formElements">
                            <label htmlFor="res-date">Choose date</label>
                            <input type="date" value={chooseDate} onChange={handleDateUpdates} id="res-date" />
                            <label htmlFor="res-time">Choose time</label>
                            <select id="res-time " onClick={handleTimesClick} >
                                {/* (updatedTimes.length==0 ?{availableTimes.map((time, index) => (<option key={index}>{time}</option>))}
                             :{updatedTimes.map((time, index) => (<option key={index}>{time}</option>))}) */}
                                {availableTimes.map((time, index) => (<option key={index}>{time}</option>))}
                                {/* {updatedTimes.map((time, index) => (<option key={index}>{time}</option>))} */}
                            </select>
                            <label htmlFor="guests">Number of guests</label>
                            <input type="number" value={guests} onChange={(e) => { setGuests(e.target.value); }} placeholder="1" min="1" max="10" id="guests" />
                            <label htmlFor="occasion">Occasion</label>
                            <select id="occasion" onChange={(e) => { setOccassion(e.target.value); }}>
                                <option>Birthday</option>
                                <option>Anniversary</option>
                            </select>
                            <button type="submit" className="btn btn-primary" value="">Make Your reservation</button>
                        </div>
                    </fieldset>

                </form>

            </div>
        </>

    )
}

export default BookingForm;
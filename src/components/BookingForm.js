import React from "react";
import { useState } from "react";



const BookingForm = ({ times, handleDateChange, updatedTimes }) => {

    const [chooseDate, setDate] = useState("");
    // const [availableTimes, setAvailableTimes] = useState([]);
    const [guests, setGuests] = useState("");
    const [occasion, setOccassion] = useState("");
    
    // let newTimesFromProps = updatedTimes;
    // console.log("this is times props:"+times);
    // console.log("this is updatedTimes props:"+updatedTimes);
    // console.log("initially received updatedTimes:" + (typeof updatedTimes ==='object'));

    // let newUpdatedTimes = updatedTimes.split;
    // console.log(updatedTimes);
    // console.log("updatedTimes:" + Array.isArray(updatedTimes));

    
    //console.log("availableTimes:" + availableTimes);
    //console.log("times:"+ times);

    //converting prop objects to arrays
    let availableTimes = Array.from(times);
    let newAvailableTimes = [];
    for (let value in updatedTimes){
         newAvailableTimes.push(updatedTimes[value]);
    }
    
    // let newAvailableTimes=[];
    // newAvailableTimes.push(Object.values(updatedTimes));
    // console.log(newAvailableTimes);
    // console.log("newAvailableTimes after converting to array:" + Array.isArray(newAvailableTimes));
    //    let newAvailableTimes = Array.from(updatedTimes);
    // console.log(" is newAvailableTimes an array:" + Array.isArray(newAvailableTimes));
    // console.log("newAvailableTimes:" + newAvailableTimes);

    const handleTimesClick = () => {
        //     console.log("times:" + Array.isArray(times));
        //    console.log("availableTimes:" + Array.isArray(availableTimes));
        //const newAvailableTimes = [updatedTimes];        
        // console.log("newAvailableTimes:" + Array.isArray(newAvailableTimes));
        // console.log("inside handleTimesClick:" + (newAvailableTimes));
        //console.log("new updated Times:" + (newAvailableTimes));
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
                                {newAvailableTimes.length === 0 ? availableTimes.map((time, index) => (<option key={index}>{time}</option>))
                                    : newAvailableTimes.map((time, index) => (<option key={index}>{time}</option>))}
                                {/* {availableTimes.map((time, index) => (<option key={index}>{time}</option>))}
                                {updatedTimes.map((time, index) => (<option key={index}>{time}</option>))} */}
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
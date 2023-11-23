import React from "react";
import { useState } from "react";



const BookingForm = ({times,setTimes}) => {

    const [chooseDate, setDate] = useState("");
   // const [availableTimes, setAvailableTimes] = useState([]);
    const [guests, setGuests] = useState("");
    const [occasion, setOccassion] = useState("");
   
  const  handleTimesClick=()=>{
   // console.log(setTimes(times));
  // dispatch({type:"update_times"});
   
    setTimes();
    //handleTimes();
    // setTimes();
        
    }

    // const handleClick = () => {
    //     setAvailableTimes(['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']);
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
                            <input type="date" value={chooseDate} onChange={(e) => { setDate(e.target.value); }} id="res-date" />
                            <label htmlFor="res-time">Choose time</label>
                            <select id="res-time "  onClick={handleTimesClick}>
                                {times.map((time, index) => (<option key={index}>{time}</option>))}
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
//Should be a re-direct page for RESERVE A TABLE button in CallToAction Component
import BookingForm from "./BookingForm";
import React, { useReducer } from "react";
//import { useState } from "react";


const  reducer=(availableTimes,action)=>{
       switch(action.type){        
           case 'updated_times':
            return {
                // ...availableTimes,
                newTimes:action.payload,
            } 
            default :
            return {
                availableTimes
            }
    }
    
}
     //this will create the initial state for availableTimes
     const initializeTimes = () => {
        const initialTimes =['17:00','18:00','19:00','20:00','21:00','21.30','22:00'];
        return initialTimes;
    }
        //this will change the availablkeTimes based on the selected date
   

const BookingPage = () => { 
   
    const [availableTimes,dispatch]=useReducer(reducer,{},initializeTimes);
    //update the useState to reducer
   // const [availableTimes, setAvailableTimes] = useState([]);

   const updateTimes = () => {
    const  updatedTimes =['17:00','18:00','19:00','20:00','21:00','22:00'];
   // return updatedTimes;    
   dispatch({type:'updated_times',payload:updatedTimes});
}

    const handleClick = () => {
        dispatch({type:'updated_times'});
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
                        setTimes={updateTimes}
                        handleTimes={handleClick}
                    />
                </div>
            </div>
        </>
    )
}

export default BookingPage;

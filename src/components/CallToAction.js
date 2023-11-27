//Call to action would be section with RESERVE A TABLE button section under nav
//import React from "react";


const CallToAction = () => {
  const handleClick = (e) => {
    e.preventDefault();
    console.log("Reserve a Table Button Clicked..")
  }

  return (
    <div className="ReservationSection">
      <div className="LogoArea">
        <h1>Little Lemon</h1>
        <h3 id="subHeading">Chicago</h3>
        <p id="logoDesc"> We are a family owned <br />Mediterranean restaurant<br /> focussed on traditional <br />recipes served with a moderrn <br />twist. </p>
        <div id="ReserveTable">
          <button type="button" id="tableButton" onClick={handleClick} className="btn btn-primary">Reserve a Table</button>
        </div>
      </div>
      <div className="displayImage">
        <img src="../images/DisplayImage.jpeg" alt="Display"></img>
      </div>
    </div>
  )
}

export default CallToAction;
//Call to action would be section with RESERVE A TABLE button section under nav


const CallToAction =()=>{
    return(
        <div className="Section">
            <div>
                <h1 id="logo">Little Lemon</h1>
                <h3 id="subHeading">Chicago</h3>
                <p id="logoDesc"> We are a family owned <br/>Mediterranean restaurant<br/> focussed on traditional <br/>recipes served with a moderrn <br/>twist. </p>
            </div>
            <div>
                <button type="button" id ="tableButton" class="btn btn-primary">Reserve a Table</button>
            </div>
            <div>
                <img src="../images/DisplayImage.jpeg" id="DisplayImage" alt="Display Image"></img>
            </div>
        </div>
    )
    }

    export default CallToAction;
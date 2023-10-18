//Restaurant Backstory Page and About Us redirect page


const Chicago = () => {
    return (
        <>
            <div className="AboutSection">
                <div className="aboutContent">
                    <div className="aboutLogoArea">
                        <div id="aboutHeadings">
                            <h1>Little Lemon</h1>
                            <h3 id="aboutSubHeading">Chicago</h3>
                        </div>
                        <div id="aboutContext">
                            <p id="aboutLogoDesc"> Amet minim mollit non deserunt <br /> ullamco est sit aliqua dolor do amet<br /> sint. Velit officia consequat duis enim <br /> velit mollit. Exercitation veniam <br /> consequat sunt nostrud amet.<br />
                                Amet minim mollit non deserunt<br /> ullamco est sit aliqua dolor do amet <br />sint. Velit officia consequat duis enim<br /> velit mollit. </p>
                        </div>

                    </div>
                </div>
                <div className="imageContent">
                <div className="aboutImageArea">
                    <div className="aboutDisplayImage">
                        <img src="../images/chicago2.jpeg" id="aboutDisplayImage1" alt="Display"></img>
                        <img src="../images/chicago1.jpeg" id="aboutDisplayImage2" alt="Display"></img>
                    </div>
                     {/* <div className="aboutDisplayImage2">
                        <img src="../images/chicago1.jpeg" id="aboutDisplayImage2" alt="Display"></img>
                    </div>  */}
                </div>
                </div>
            </div>
        </>
    )
}

export default Chicago;
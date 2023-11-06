//Specials section


const Specials = () => {
    return (
        <div className="Specials" id="menu">
            <div className="SpecialsSection">
                <div className="mainContent">
                    <div className="mainContextArea">
                        <div id="specialsHeading">
                            <h2 >Specials</h2>
                        </div>
                        <div id='menuButton'>
                            <button type="button" className="btn btn-primary" >Online Menu</button>
                        </div>
                    </div>
                </div>
                <div className="cardSection">
                    <div className="cardArea">
                        <div className="card">
                            <img src="../images/salad.jpeg" alt="salad"></img>
                            <div className="dishContent">
                                <div className="dishType">
                                    <h3>Greek Salad</h3>
                                    <h4>$12.99</h4>
                                </div>
                                <div id="dishContent">
                                    <p>The famaous greek salad of<br/> crispy lettuce,peppers,olives <br/>and our Chicago style feta<br/> cheese, garnished with<br/> crunchy and rosemary croutons.</p>
                                </div>

                            </div>
                            <div id="delivery">
                                <h5>Order a delivery</h5>
                            </div>

                        </div>
                    </div>
                    <div className="cardArea">
                        <div className="card">
                            <img src="../images/brushetta.jpeg" alt="bruchetta"></img>
                            <div className="dishContent">
                                <div className="dishType">
                                    <h3>Bruchetta</h3>
                                    <h4>$5.99</h4>
                                </div>
                                <div id="dishContent">
                                    <p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p>

                                </div>
                            </div>
                            <div id="delivery">
                                <h5>Order a delivery</h5>
                            </div>
                        </div>
                    </div>
                    <div className="cardArea">
                        <div className="card">
                            <img src="../images/lemonDessert.jpeg" alt="lemon dessert"></img>
                            <div className="dishContent">
                                <div className="dishType">
                                    <h3>Lemon Dessert</h3>
                                    <h4>$5.00</h4>
                                </div>

                            </div>
                            <div id="dishContent">
                                <p>This comes straight from grandma's recipe book, every last ingredient has been sourceds and is as authentic as can be imagined.</p>
                            </div>

                            <div id="delivery">
                                <h5>Order a delivery</h5>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default Specials;
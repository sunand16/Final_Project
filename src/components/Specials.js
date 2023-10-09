//Specials section


const Specials = () => {
    return (
        <>
            <div className="SpecialsSection">
                <div className="mainContent">
                    <h2 >Specials</h2>
                    <button  class="btn btn-primary">Online Menu</button>
                </div>
            <div class="cardArea">
                <div className="card">
                    <img src="../images/salad.jpeg"  alt="salad"></img>
                    <h3>Greek Salad</h3>
                    <h4>$12.99</h4>
                    <p>The famaous greek salad of crispy lettuce,peppers,olives and our Chicago style feta cheese, garnished with crunchy and rosemary croutons.</p>
                    <h5>Order a delivery</h5>
                </div>
                <div className="card">
                    <img src="../images/brushetta.jpeg"  alt="bruchetta"></img>
                    <h3>Bruchetta</h3>
                    <h4>$5.99</h4>
                    <p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p>
                    <h5>Order a delivery</h5>
                </div>
                <div className="card">
                    <img src="../images/lemonDessert.jpeg"  alt="lemon dessert"></img>
                    <h3>Lemon Dessert</h3>
                    <h4>$5.00</h4>
                    <p>This comes straight from grandma's recipe book, every last ingredient has been sourceds and is as authentic as can be imagined.</p>
                    <h5>Order a delivery</h5>
                </div>
            </div>
            </div>
        </>
    )
}

export default Specials;
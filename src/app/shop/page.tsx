import "./shop.css"

export default function ShopPage() {
    return(
        <main>
        <h2>Our Custom Tools</h2>
        <div id="products">
            <div className="product">
                <img id="axe" src="axe.jpg" alt="Viking Axe"/>
                <div className="product-description">
                    <h3>Handcrafted Viking Axe</h3>
                    <p>Price: $150</p>
                    <button>Add to Cart</button>
                </div>
            </div>
            <div className="product">
                <img src="shield.jpg" alt="Viking Shield"/>
                <div className="product-description">
                    <h3>Viking Shield</h3>
                    <p>Price: $200</p>
                    <button>Add to Cart</button>
                </div>
            </div>
            <div className="product">
                <img id="axe" src="axe.jpg" alt="Viking Axe"/>
                <div className="product-description">
                    <h3>Handcrafted Viking Axe</h3>
                    <p>Price: $150</p>
                    <button>Add to Cart</button>
                </div>
            </div>
            <div className="product">
                <img id="axe" src="axe.jpg" alt="Viking Axe"/>
                <div className="product-description">
                    <h3>Handcrafted Viking Axe</h3>
                    <p>Price: $150</p>
                    <button>Add to Cart</button>
                </div>
            </div>
        </div>
    </main>
    )
}
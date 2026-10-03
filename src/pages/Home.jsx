import Products from "../components/Products.jsx";
import "./Home.css"
import { products } from "../data.js";
export default function Home() {

    return(
         <>
        <h2>Home page</h2>
        <div className="products-container">
            {products.map((product) => (
                <Products key={product.id} product={product} />
            ))}
        </div>
        </>
    );

}
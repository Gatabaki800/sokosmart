import "./Products.css"

export default function Products({ product }) {
    return(
        <div className="card">
             <h2>{product.name}</h2>
             <p>{product.description}</p>
             <p>KSh {product.price} per kg</p>
             <p>Quantity: {product.quantity} kg</p>
        </div>
    );
}
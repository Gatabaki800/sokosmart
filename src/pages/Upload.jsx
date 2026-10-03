import "./Upload.css"

export default function Upload(){
    return(
        <>
        <div className="form-container">
        <h2>Enter Product Details</h2>
        <form>
            <label htmlFor="productName">Product Name:</label>
            <input type="text" id="productName" name="productName" required />
            <br />
            <label htmlFor="productPrice">Product Price:</label>
            <input type="number" id="productPrice" name="productPrice" required />
            <br />
            <label htmlFor="productQuantity">Product Quantity:</label>
            <input type="number" id="productQuantity" name="productQuantity" required />
            <br />
            <label htmlFor="productDescription">Product Description:</label>
            <textarea id="productDescription" name="productDescription" required></textarea>
            <br />
            <label htmlFor="phoneNumber">Phone Number:</label>
            <input type="text" id="phoneNumber" name="phoneNumber" required />
            <br />
            <label htmlFor="location">Location:</label>
            <input type="text" id="location" name="location" required />
            <br />
            <button type="submit">Upload</button>   
        </form>
        </div>
        </>
    );

}
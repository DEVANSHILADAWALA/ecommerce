import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetail() {
  const { pid } = useParams();
  const [data, setData] = useState(null);
  const [quantity, setQuantity] = useState("1");

  // Fetch product details
  useEffect(() => {
    const fetchProduct = async () => {
      const formdata = new FormData();
      formdata.append("id", pid);

      try {
        const response = await axios.post(
          "https://studiogo.tech/student/shoppingapi/single_product.php",
          formdata
        );
        if (response.status === 200) {
          setData(response.data.data);
        }
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [pid]);

  // Add product to cart
  const handleCart = async () => {
    if (!quantity || quantity <= 0) {
      alert("Please enter a valid quantity.");
      return;
    }

    const formdata = new FormData();
    formdata.append("user_id", sessionStorage.getItem("user_id"));
    formdata.append("product_id", pid);
    formdata.append("qty", quantity);

    try {
      const res = await axios.post(
        "https://studiogo.tech/student/shoppingapi/addtocart.php",
        formdata
      );
      console.log("Added to cart:", res.data);
      alert("Product added to cart!");
    } catch (err) {
      console.error("Add to cart error:", err);
      alert("Failed to add product to cart.");
    }
  };

  if (!data) return <h2 className="text-center mt-4">Please wait...</h2>;

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <img
            src={data.img1}
            alt="Product"
            style={{ width: "100%", height: "400px", objectFit: "contain" }}
            className="m-3"
          />
        </div>
        <div className="col-md-6">
          <h3>{data.title}</h3>
          <p>{data.description}</p>
          <ul className="list-group mb-3">
            <li className="list-group-item"><strong>Price:</strong> ₹{data.price}</li>
            <li className="list-group-item"><strong>Availability:</strong> {data.isavailable}</li>
            <li className="list-group-item"><strong>Specifications:</strong> {data.speccifications}</li>
          </ul>

          {sessionStorage.getItem("islogin") ? (
            <div>
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                className="form-control w-50 d-inline-block"
                placeholder="Enter Quantity"
              />
              <button className="btn btn-primary btn-lg m-2" onClick={handleCart}>
                Add to Cart
              </button>
            </div>
          ) : (
            <p className="text-danger">Please login first.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;

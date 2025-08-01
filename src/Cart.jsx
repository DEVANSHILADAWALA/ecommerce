import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Cart() {
  // Remove user_id from useParams
  // const { user_id } = useParams();

  // Get user_id from localStorage (only on client side)
  

  const [cartItems, setCartItems] = useState([]);
  const [finalTotal, setFinalTotal] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
   
    const formdata = new FormData();
    formdata.append("user_id", sessionStorage.getItem("user_id"));

    axios
      .post("https://studiogo.tech/student/shoppingapi/viewcart.php", formdata)
      .then((response) => {
        if (response.status === 200) {
          setCartItems(response.data);
          let total = 0;
          response.data.forEach((obj) => {
            total += parseFloat(obj.qty) * parseFloat(obj.price);
          });
          setFinalTotal(total);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleDelete = (cart_id) => {
    const formdata = new FormData();
    formdata.append("cart_id", cart_id);

    axios
      .post("https://studiogo.tech/student/shoppingapi/deletecart.php", formdata)
      .then((response) => {
        if (response.status === 200) {
          setCartItems(cartItems.filter(item => item.cart_id !== cart_id));
          // Recalculate total after delete
          let total = 0;
          cartItems
            .filter(item => item.cart_id !== cart_id)
            .forEach((obj) => {
              total += parseFloat(obj.qty) * parseFloat(obj.price);
            });
          setFinalTotal(total);
        }
      })
      .catch((error) => {
        console.log("Delete Error:", error);
      });
  };

  const handleCheckout = () => {
    navigate("/checkout");
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "900px" }}>
      <h3 className="mb-4 text-center fs-2" style={{ color: "#3F69AA" }}>
        Shopping Cart
      </h3>
      <table className="table table-striped table-bordered align-middle" style={{ fontSize: "1.25rem" }}>
        <thead className="text-center" style={{ backgroundColor: "#3F69AA", color: "white" }}>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Quantity</th>
            <th>Price ($)</th>
            <th>Total ($)</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item, index) => (
            <tr className="text-center" key={index}>
              <td>
                <img
                  src={item.img1}
                  alt={item.title}
                  className="img-thumbnail"
                  style={{ width: "120px", height: "120px", objectFit: "cover" }}
                />
              </td>
              <td className="text-start" style={{ color: "#3F69AA", fontWeight: "600", paddingLeft: "1rem" }}>
                {item.title}
              </td>
              <td>
                <input
                  type="number"
                  className="form-control text-center"
                  defaultValue={item.qty || 1}
                  min={1}
                  readOnly
                  style={{
                    borderColor: "#3F69AA",
                    color: "#3F69AA",
                    fontWeight: "600",
                    fontSize: "1.25rem",
                    width: "90px",
                    margin: "0 auto",
                    padding: "0.5rem",
                  }}
                />
              </td>
              <td style={{ color: "#3F69AA" }}>${item.price}</td>
              <td style={{ color: "#3F69AA" }}>${(item.qty || 1) * item.price}</td>
              <td>
                <button
                  onClick={() => handleDelete(item.cart_id)}
                  className="btn btn-danger btn-sm"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="card w-50 m-2">
        <div className="card-body">
          <h5 className="card-title">Total Amount</h5>
          <p className="card-text text-start">${finalTotal.toFixed(2)}</p>
          <button className="btn btn-primary" onClick={handleCheckout}>
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;

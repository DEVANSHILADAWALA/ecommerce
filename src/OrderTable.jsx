import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CheckOutDetail from "./CheckOutDetail";

function OrderTable(props) {
  const [orders, setOrders] = useState([]);
 
  const navigate = useNavigate();

  const { order_id, finalTotal, address_line_1, address_line_2, pincode, order_date_time, status, } = props.FormData || {};

  function handleOrder(orderId) {


    const formdata = new FormData();
    formdata.append("order_id", orderId);

    axios.post("https://studiogo.tech/student/shoppingapi/myorderdetails.php", formdata).then((response) => {
      if (response.status == 200) {
        var json = response.data
        console.log(json);
      }
    }).catch((error) => {
      console.log(error);

    })
        navigate("/CheckOutDetail");
  }

  useEffect(() => {
    const formdata = new FormData();
    formdata.append("user_id", sessionStorage.getItem("user_id"));
    formdata.append("order_id", order_id);
    formdata.append("total_amount", finalTotal);
    formdata.append("address_line_1", address_line_1);
    formdata.append("address_line_2", address_line_2);
    formdata.append("pincode", pincode);
    formdata.append("order_date_time", order_date_time);
    formdata.append("status", status);

    axios.post("https://studiogo.tech/student/shoppingapi/myorders.php", formdata).then((response) => {
      if (response.status === 200) {
        const json = response.data;
        setOrders(json);
      }
    })
      .catch((error) => {
        console.log(error);
      });
  }, [order_id, finalTotal, address_line_1, address_line_2, pincode, order_date_time, status]);

  return (
    <div className="container mt-5" style={{ maxWidth: "1000px" }}>
      <h3 className="mb-4 text-center" style={{ color: "#3F69AA" }}>
        Order List
      </h3>
      <table className="table table-bordered table-striped align-middle">
        <thead
          className="text-center"
          style={{ backgroundColor: "#3F69AA", color: "white", fontSize: "1.1rem" }}
        >
          <tr>
            <th style={{ width: "60px" }}>No</th>
            <th>Order ID</th>
            <th>Total Amount</th>
            <th>Address Line 1</th>
            <th>Address Line 2</th>
            <th>Pincode</th>
            <th>Order Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody className="text-center" style={{ fontSize: "1.1rem" }}>
          {orders.length > 0 ? (
            orders.map((order, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td onClick={() => handleOrder(order.order_id)}> {order.order_id}</td>
                <td>{order.total_amount}</td>
                <td>{order.address_line_1}</td>
                <td>{order.address_line_2}</td>
                <td>{order.pincode}</td>
                <td>{order.order_date_time}</td>
                <td>{order.status}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="8">No orders found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default OrderTable;

import axios from "axios";
import React, { useState, useEffect, useRef } from "react";

function CheckOut() {
  const add1 = useRef();
  const add2 = useRef();
  const pin = useRef();
 

  const [cartItems, setCartItems] = useState([]);
  const [finalTotal, setFinalTotal] = useState(0);


  function handleBtn(e) {

    e.preventDefault();


    var sadd1 = add1.current.value;
    var sadd2 = add2.current.value;
    var spin = pin.current.value;

    var params = {
      "amount": parseInt(finalTotal)
    }
    axios.post("https://studiogo.tech/student/shoppingapi/create_payment.php",params).then((response)=>{
      if(response.status==200)
      {
        var data = response.data;
        const options = {
          key: "rzp_test_aro7DmNCYha043",
          amount: data.amount,
          currency: data.currency,
          name: 'My Store',
          description: 'Test Transaction',
          order_id: data.id,
          handler: function (response) {
            alert('Payment ID: ' + response.razorpay_payment_id);
            const formdata = new FormData();
            formdata.append("user_id", sessionStorage.getItem("user_id"));
            formdata.append("total_amount", finalTotal);
            formdata.append("address_line_1", sadd1);
            formdata.append("address_line_2", sadd2);
            formdata.append("pincode", spin);

            axios.post("https://studiogo.tech/student/shoppingapi/add_order.php", formdata).then((response) => {
                if (response.status === 200) {
                  console.log(response.data)
                  alert("Thank you")
                }
              })
              .catch((error) => {
                console.log(error);
              });
          },
          prefill: {
            name: 'John Doe',
            email: 'john@example.com',
            contact: '9999999999',
          },
          theme: {
            color: '#3399cc',
          },
        };

        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
      }
    }).catch((error)=>{
      //Fail Page Redirect
      console.log(error);
    })


  
   
    
    

    

  }

  useEffect(() => {

    const formdata = new FormData();
    formdata.append("user_id", sessionStorage.getItem("user_id"));

    axios.post("https://studiogo.tech/student/shoppingapi/viewcart.php", formdata).then((response) => {
        if (response.status === 200) {
          console.log(response.data)
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


  return (
    <div className="container mt-5">
      <div className="row">
        {/* Form Column */}
        <div className="col-md-6">
          <div style={{ padding: 20, fontFamily: "Arial" }}>
            <h2 style={{ color: "#3F69AA", padding: 10 }} className="text-center">
              Checkout Page
            </h2>
            <form onSubmit={handleBtn} >
              <div className="form-group">
                <input type="text" ref={add1} className="form-control m-2" id="formGroupExampleInput" placeholder="Addres line1"></input>
              </div>
              <div className="form-group">
                <input type="text" ref={add2} className="form-control m-2" id="formGroupExampleInput2" placeholder="Addres Line2"></input>
              </div>
              <div className="form-group">
                <input type="text" ref={pin} className="form-control m-2" id="formGroupExampleInput2" placeholder="PinCode"></input>
              </div>
              <button className="btn btn-primary m-2"  type="Submit">PAY</button>
            </form>
          </div>
        </div>

        {/* Cart Summary Column */}
        <div className="col-md-6">
          <h3 style={{ color: "#3F69AA" }}>Cart Summary</h3>
          {cartItems.length === 0 ? (
            <p>No items in cart.</p>
          ) : (
            cartItems.map((item) => (
              <div
                key={item.cart_id}
                style={{ marginBottom: 10, borderBottom: "1px solid #ccc", paddingBottom: 10 }}
              >
                <img src={item.img1} alt={item.title} style={{ width: 50, marginRight: 10 }} />
                <strong>{item.title}</strong>
                <br />
                Price: ${item.price} <br />
                Quantity: {item.qty}
                <br />
                Total: ${item.price * item.qty}
              </div>
            ))
          )}
          <h4>Total Payable: ${finalTotal}</h4>
        </div>
      </div>
    </div>
  );
}

export default CheckOut;

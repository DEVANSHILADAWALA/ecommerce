function CheckOutDetail() {

//     const formdata = new FormData();
//     formdata.append("order_id", orderId);

//     axios.post("https://studiogo.tech/student/shoppingapi/myorderdetails.php", formdata).then((response) => {
//       if (response.status == 200) {
//         var json = response.data
//         console.log(json);
//       }
//     }).catch((error) => {
//       console.log(error);

//     })
//   }
    return (<>
        <div className="card mb-3" style={{maxwidth: '540px'}}>
            <div className="row g-0">
                <div className="col-md-3">
                    <img src="..." className="img-fluid rounded-start m-2" alt="..."></img>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </div>
        </div>

    </>)
}
export default CheckOutDetail;
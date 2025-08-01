import { useNavigate } from 'react-router-dom';
import './App.css';

function ProductItem(props) {
     const navigate = useNavigate();

  function handelClick(){
     var id = props.id;
        navigate("/productdetail/"+props.product_id);
        
    }
  return (
    <div>
    <div className="card m-5 " style={{ width: '18rem', cursor:'default' }}>
      <img src={props.img1} onClick={handelClick} className="card-img-top product-image" alt="..." />
      
      <div className="card-body">
        <h5 className="card-title text-center title" onClick={handelClick}>{props.title} </h5>
      </div>
      <ul className="list-group  list-group-flush">
        <li className="list-group-item "><p className='Price text-lg-center'>Price:{props.price}</p></li>
      </ul>
    </div>

    <div className="card m-5" style={{ width: '18rem' }}>
      <img src={props.img2} onClick={handelClick} className="card-img-top product-image" alt="..." />
      
      <div className="card-body">
        <h5 className="card-title text-center title" onClick={handelClick}>{props.title}</h5>
      </div>
      <ul className="list-group  list-group-flush">
        <li className="list-group-item "><p className='Price text-lg-center'>Price:{props.price}</p></li>
      </ul>
    </div>

    <div className="card m-5 " style={{ width: '18rem'}}>
      <img src={props.img3}  onClick={handelClick}   cursor:context-menu className="card-img-top product-image " alt="..." />
      
      <div className="card-body">
        <h5 className="card-title text-center title" onClick={handelClick}>{props.title}</h5>
      </div>
      <ul className="list-group  list-group-flush">
        <li className="list-group-item "><p className='Price text-lg-center'>Price:{props.price}</p></li>
      </ul>
    </div>
    
    </div>



  );
}

export default ProductItem; 
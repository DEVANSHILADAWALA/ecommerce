import { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import axios from "axios";

function Product() {
    const [data, SetData] = useState([]);

    useEffect(() => {
        axios
            .get("https://studiogo.tech/student/shoppingapi/products.php")
            .then((response) => {
                if (response.status === 200) {
                    SetData(response.data);
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <div className="container py-5">
            <div className="d-flex flex-wrap gap-4 justify-content-center">
                {data && data.map((obj) => {
                    return (<>
                        <ProductItem
                            key={obj.product_id}
                            product_id={obj.product_id}
                            title={obj.title}
                            price={obj.price}
                            img1={obj.img1} 
                            img2={obj.img2} 
                            img3={obj.img3} />
                    </>)
                })}
            </div>
        </div>
    );
}

export default Product;

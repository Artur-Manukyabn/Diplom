import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "@smastrom/react-rating/style.css";
import { Rating } from "@smastrom/react-rating";
import "./SingleProduct.scss";
import axios from "axios";
export default function SingleProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const {type} = useParams()
  useEffect(() => {
    axios(`http://localhost:3000/musical_instruments/${id}`).then((res) => {
      setProduct(res.data);
    });
  }, []);
  return (
    <div className="SingleProduct" >
      <div className="SingleProduct__card noExit">
        <button onClick={()=>{window.location.href=`/catalog/${type}`}}><i class="bi bi-x-circle"></i></button>
        <div className="SingleProduct__topSide noExit">
          <img src={product.image} alt={product.name} />
          <div className="SingleProduct__title  noExit">
            <h1>{product.name}</h1>
            <h3>Price: {product.price}</h3>
            <Rating
              style={{ maxWidth: 200, width: "100%" }}
              value={product.rating}
              readOnly
              className="SingleProduct__ratingStars"
            />
          </div>
        </div>
        <div  className="SingleProduct__text noExit ">
          <p><span>{product.name}</span>. {product.description}</p>
        </div>
      </div>
    </div>
  );
}

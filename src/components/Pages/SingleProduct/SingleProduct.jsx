import React, { useEffect, useState } from 'react'
import { Link, useParams } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";
import "./SingleProduct.scss"
import axios from 'axios';
export default function SingleProduct() {
    const {id}=useParams()
    const [product, setProduct] = useState({});
    console.log(product);
    console.log(id);
    useEffect(() => {
      axios(`http://localhost:3000/musical_instruments/${id}`)
      .then(res=>{setProduct(res.data)})
     
    }, [])
    
  return (
    <div className='SingleProduct'>
      <h1>{product.name}</h1>
    </div>
  )
}

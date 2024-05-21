import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import "@smastrom/react-rating/style.css";
import { Rating } from "@smastrom/react-rating";
import { cutText } from "../../../helpers/cutText";
import "./Catalog.scss";

export default function Catalog() {
  const { type } = useParams();
  const [filteredInstrument, setFilteredInstrument] = useState([]);
  const [user, setUser] = useState([]);
  const userID = localStorage.getItem('user')
  useEffect(() => {
    axios("http://localhost:3000/musical_instruments").then((res) => {
      const response = res.data.filter((item) => {
        return item.type.toLowerCase().includes(type.toLowerCase());
      });
      setFilteredInstrument(response);
    });
    axios(`http://localhost:3000/users/${userID}`).then((res) => {
      setUser(res.data);
    });
  }, [user]);

  const addCart = (id) => {
    const newCart = [...user.cart, id];
    if (user.cart.includes(id)) {
      return
    }
    axios
      .patch(`http://localhost:3000/users/${userID}`, {...user,cart:newCart}).then(res=>{ 
      console.log(res.data);  
      setUser(res.data);})
  };

  return (
    <div className="Catalog">
      <h1>{type}s</h1>
      <div className="Catalog__cards">
        {filteredInstrument.map((elem) => {
          return (
            <div key={elem.id} className="Catalog__card">
              <img src={elem.image} alt={elem.title} />
              <h3>{elem.name}</h3>
              <p>{cutText(elem.description, 100)}</p>
              <Rating style={{ maxWidth: 150 }} value={elem?.rating} readOnly />
              <div className="Catalog__buttons">
                <Link to={elem.id}>Read more</Link>
                <button
                  onClick={() => {
                    addCart(+elem.id);
                  }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

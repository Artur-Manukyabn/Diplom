import axios from "axios";
import React, { useState, useEffect } from "react";
import "./Account.scss";

export default function Account() {
  const [user, setUser] = useState([]);
  const [products, setProducts] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [history, setHistory] = useState([]);
  
  useEffect(() => {
    axios("http://localhost:3000/users").then((res) => {
      setUser(res.data[0]);
    });
    axios("http://localhost:3000/musical_instruments").then((res) => {
      setProducts(res.data);
    });
    setFavorites(
      products.filter((prod) => {
        return user.fav.includes(Number(prod.id));
      })
    );
    setHistory(
      ()=>{
       products.filter((prod) => {
          return user.purchases.includes(Number(prod.id));
        })
      }
    );
  }, []);

  return (
    <div className="Account">
      <div className="Account__card">
        <i className="bi bi-pencil-fill Account__edit"></i>
        <img src={user.image} alt="account image" />
        <h2>
          <i className="bi bi-person-fill"></i>
          {user.username}
        </h2>
        <p>
          <i className="bi bi-credit-card"></i>
          {user.card}
        </p>
        <button>
          Sign Out<i className="bi bi-box-arrow-left"></i>
        </button>
      </div>
      <div className="Account__purchases">
        <h2>Order history</h2>
        <div className="Accout__orderHistory">
        </div>
        <h2>Favorites</h2>
        <div className="Account__favorites"></div>
      </div>
    </div>
  );
}

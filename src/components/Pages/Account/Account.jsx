import axios from "axios";
import React, { useState, useEffect } from "react";
import "./Account.scss";
import Slider from "react-slick";

export default function Account() {
  const [user, setUser] = useState([]);
  const [products, setProducts] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [history, setHistory] = useState([]);
  useEffect(() => {
    const userID = localStorage.getItem("user");
    axios(`http://localhost:3000/users/${userID}`).then((res) => {
      setUser(res.data);
    });
    axios("http://localhost:3000/musical_instruments").then((res) => {
      setProducts(res.data);
    });
  }, []);

  useEffect(() => {
    setFavorites(
      products.filter((prod) => {
        return user.fav.includes(Number(prod.id));
      })
    );
  }, [user, products]);
  useEffect(() => {
    setHistory(
      products.filter((prod) => {
        return user.purchases.includes(Number(prod.id));
      })
    );
  }, [user, products]);

  const singOut = () => {
    localStorage.setItem("user", null);
    window.location.href = "/login";
  };
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows:false
  };
  return (
    <div className="Account">
      <div className="Account__personeCard">
        <i className="bi bi-pencil-fill Account__edit"></i>
        <img src={user.image} alt="account image" />
        <h2>
          <i className="bi bi-person-fill"></i>
          {user.userName}
        </h2>
        <p>
          <i className="bi bi-credit-card"></i>
          {user.card}
        </p>
        <button onClick={singOut}>
          Sign Out<i className="bi bi-box-arrow-left"></i>
        </button>
      </div>
      <div className="Account__purchases">
        <h2>Order history</h2>

        <div className="Account__orderHistory">
          <Slider {...settings}>
            {history.map((prod) => {
              return (
                <img
                  className="Account__image"
                  src={prod.image}
                  alt={prod.type}
                  key={prod.id}
                />
              );
            })}
          </Slider>
          
        </div>
        <h2>Favorites</h2>
        <div className="Account__favorites">
          <Slider {...settings}>
          {favorites.map((prod) => {
            return (
              <img
                className="Account__image"
                src={prod.image}
                alt={prod.type}
                key={prod.id}
              />
            );
          })}
          </Slider>
        </div>
      </div>
    </div>
  );
}

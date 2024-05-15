import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Home.scss";
import { Link } from "react-router-dom";
import ROUTES from "../../../routes";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Home() {
  const [instruments, setInstruments] = useState([]);
  useEffect(() => {
    axios("http://localhost:3000/catalog").then((res) => {
      setInstruments(res.data);
    });
  }, []);

  return (
    <div className="Home">
      <div className="Home__posters">
        <div className="Home__poster"></div>
        <div className="Home__poster"></div>
        <div className="Home__poster"></div>
      </div>
      <h1 className="Home__title">Categires</h1>
      <div className="Home__cards">
        {instruments.map((elem, index) => {
          return (
            <div className="Home__card" key={elem.id}>
              <img src={elem.image} alt={elem.title} />
              <h3>
                <Link to={`/catalog/${elem.title}`}>{elem.title}</Link>
              </h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Home.scss";
import { Link } from "react-router-dom";
export default function Home() {
  const [data, setData] = useState([]);
  const [currentType, setCurrentType] = useState("");

  const hendelChengType = (type) => {
    setCurrentType(type);
  };

  useEffect(() => {
    axios("http://localhost:3000/musical_instruments").then((res) => {
      console.log(res);
    });
  }, []);

  return (
    <div className="Home">
      <div className="Home__posters">
        <div className="Home__poster"></div>
        <div className="Home__poster">
          <img src="" alt="" />
        </div>
        <div className="Home__poster">
          <img src="" alt="" />
        </div>
      </div>
      <h1 className="Home__title">Categires</h1>
      <div className="Home__cards">
        <div className="Home__card">
          <img src="./images/electrick_guitar.jpg" alt="" />
          <h3
            onClick={() => {
              hendelChengType("guitars");
            }}
          >
            <Link to="/catalog/guitars">Guitars</Link>
          </h3>
        </div>
        <div className="Home__card">
          <img src="./images/piano.jpg" alt="" />
          <h3
            onClick={() => {
              hendelChengType("piano");
            }}
          >
            <Link to="/catalog/piano">Piano</Link>
          </h3>
        </div>
        <div className="Home__card">
          <img src="./images/drum_sets.jpg" alt="" />
          <h3
            onClick={() => {
              hendelChengType("drums");
            }}
          >
            <Link to="/catalog/drums">Drums</Link>
          </h3>
        </div>
        <div className="Home__card">
          <img src="./images/sintezator.jpg" alt="" />
          <h3
            onClick={() => {
              hendelChengType("sintezators");
            }}
          >
            <Link to="/catalog/sintezators">Sintezators</Link>
          </h3>
        </div>
        <div className="Home__card">
          <img src="./images/violin.jpg" alt="" />
          <h3
            onClick={() => {
              hendelChengType("violin");
            }}
          >
            <Link to="/catalog/violin">Violin</Link>
          </h3>
        </div>
        <div className="Home__card">
          <img src="./images/flute.jpg" alt="" />
          <h3
            onClick={() => {
              hendelChengType("flute");
            }}
          >
            <Link to="/catalog/flute">Flute</Link>
          </h3>
        </div>
      </div>
    </div>
  );
}

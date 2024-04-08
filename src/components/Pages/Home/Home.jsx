import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Home.scss";
export default function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios("http://localhost:3000/musical_instruments").then((res) => {
      console.log(res);
    });
  }, []);

  return (
    <div className="Home">
      <div className="Home__posters">
        <div className="Home__poster">
        </div>
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
          <h3>Guitars</h3>
        </div>
        <div className="Home__card">
          <img src="./images/piano.jpg" alt="" />
          <h3>Piano</h3>
        </div>
        <div className="Home__card">
          <img src="./images/drum_sets.jpg" alt="" />
          <h3>Drums</h3>
        </div>
        <div className="Home__card">
          <img src="./images/sintezator.jpg" alt="" />
          <h3>Sintezators</h3>
        </div>
        <div className="Home__card">
          <img src="./images/violin.jpg" alt="" />
          <h3>Violin</h3>
        </div>
        <div className="Home__card">
          <img src="./images/flute.jpg" alt="" />
          <h3>Flute</h3>
        </div>
      </div>
    </div>
  );
}

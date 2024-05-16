import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Home.scss";
import { Link } from "react-router-dom";
import ROUTES from "../../../routes";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function Home() {
  const [instruments, setInstruments] = useState([]);
  useEffect(() => {
    axios("http://localhost:3000/catalog").then((res) => {
      setInstruments(res.data);
    });
  }, []);

  const settingsForOne = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 300,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    autoplaySpeed: 2000,
    arrows:false,
    pauseOnHover:false,
    pauseOnFocus:false
  };
  const settingsForTwo = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 300,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    autoplaySpeed: 2500,
    arrows:false,
    pauseOnHover:false,
    pauseOnFocus:false
  };
  const settingsForThre = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 300,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    autoplaySpeed: 3000,
    arrows:false,
    pauseOnHover:false,
    pauseOnFocus:false
  };

  return (
    <div className="Home">
      <div className="Home__posters">
        <div className="Home__poster">
          <Slider {...settingsForOne}>
            <img src="./images/poster3.png" alt="" />
            <img src="./images/poster1.jpg" alt="" />
            <img src="./images/poster2.png" alt="" />
          </Slider>
        </div>
        <div className="Home__poster">
          <Slider {...settingsForTwo}>
            <img src="./images/poster2.png" alt="" />
            <img src="./images/poster1.jpg" alt="" />
            <img src="./images/poster3.png" alt="" />
          </Slider>
        </div>
        <div className="Home__poster">
        <Slider {...settingsForThre}>
            <img src="./images/poster1.jpg" alt="" />
            <img src="./images/poster2.png" alt="" />
            <img src="./images/poster3.png" alt="" />
          </Slider>
        </div>
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

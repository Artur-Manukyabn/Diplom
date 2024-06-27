import React from "react";
import "./About.scss";
import { Link } from "react-router-dom";
import ROUTES from "../../../routes";
export default function About() {
  return (
    <div className="About">
      <div className="About__infoBlocks">
        <div className="About__infoBlock">
          <h1>Welcome to Music Town!</h1>
          <p><span>Music Town</span> founded in 2005 by passionate musicians, Music Town began as a small, local store with a simple mission: to provide high-quality musical instruments and exceptional customer service to fellow music enthusiasts. Over the years, we've grown into a renowned musical hub, known for our extensive range of instruments and our commitment to fostering musical talent in the community.</p>
        </div>
        <div className="About__logo">
          <img src="./images/logo.jpg" alt="logo" />
        </div>
        <div className="About__infoBlock">
          <img src="./images/shopPhotp.jpg" alt="shopPhotp" />
          <div className="About__textBlock">
            <h2>About Our Team</h2>
            <p>At Music Town, we believe that our people are our greatest asset. Our team is made up of experienced musicians, each with a deep love for music and a commitment to helping you find the right instrument and gear. From our friendly sales associates to our skilled repair technicians, every member of the Music Town family is here to support you on your musical journey.</p>
            <button><Link to={ROUTES.HOME}>Let`s Get Started<span><i className="bi bi-arrow-up-right-circle-fill"></i></span></Link></button>
          <div className="About__links">
                  <Link to="https://www.facebook.com"><i className="bi bi-facebook"></i> <h3>Music_Town</h3></Link>
                  <Link to="https://www.twitter.com"><i className="bi bi-twitter"></i><h3>Music_Town</h3></Link>
                  <Link to="https://www.instagram.com"><i className="bi bi-instagram"></i><h3>Music_Town</h3></Link>
                  <Link to="https://www.linkedin.com"><i className="bi bi-linkedin"></i><h3>Music_Town</h3></Link>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

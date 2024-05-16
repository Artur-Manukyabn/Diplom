import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import "./Navbar.scss";
import ROUTES from "../../routes";
import Cart from "../Cart/Cart";
import LocationSelect from "../LocationSelect/LocationSelect";

export default function Navbar() {
  const [cartActive, setCartActive] = useState(false);
  const [locationActive, setLocationActive] = useState(false);
  return (
   <>
    <header>
      <div className="Logo">
        <Link to="/">
          <i className="bi bi-music-note-beamed"></i>
        </Link>
      </div>
      <div
        className="Search"
        onClick={() => {
          console.log(window.scrollY);
        }}
      >
        <form>
          <input type="text" placeholder="Search" />
          <button type="submit">
            <i className="bi bi-search"></i>
          </button>
        </form>
      </div>
      <nav>
        <ul>
          <li>
            <Link to={ROUTES.HOME}>
              <i className="bi bi-house-fill"></i>
            </Link>
          </li>
          <li>
            <Link to={ROUTES.ACCOUNT}>
              <i className="bi bi-person-fill"></i>
            </Link>
          </li>
              <li onClick={()=>{setCartActive(!cartActive)}}>
                  <i className="bi bi-cart4"></i>
              </li>
              
          <li>
            <Link to={ROUTES.ABOUT}>
              <i className="bi bi-info-circle-fill"></i>
            </Link>
          </li>
          <li>
            <Link to={ROUTES.SETTINGS}>
              <i className="bi bi-gear-fill"></i>
            </Link>
          </li>
          <li onClick={()=>{setLocationActive(!locationActive)}}>
              <i className="bi bi-geo-alt-fill"></i>
          </li>
        </ul>
      </nav>
    </header>
      {cartActive ? (<Cart/>):null}
      {locationActive ? (<LocationSelect/>):null}
      </>
  );
}

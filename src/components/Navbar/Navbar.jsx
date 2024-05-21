import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import "./Navbar.scss";
import ROUTES from "../../routes";
import Cart from "../Cart/Cart";
import LocationSelect from "../LocationSelect/LocationSelect";
import axios from "axios";

export default function Navbar() {
  const [cartActive, setCartActive] = useState(false);
  const [locationActive, setLocationActive] = useState(false);
  const [userID, setUserID] = useState(null);
  useEffect(() => {
    setUserID(JSON.parse(localStorage.getItem("user")));
  }, []);

  return (
    <>
      <header
        className={classNames({
          scrolled: window.screenY > 100,
        })}
      >
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
            {userID !== null ? (
              <li
                onClick={() => {
                  setCartActive(!cartActive);
                }}
              >
                <i className="bi bi-cart4"></i>
              </li>
            ) : (
              <li>
                <Link to={ROUTES.LOGIN}>
                  <i className="bi bi-cart4"></i>
                </Link>
              </li>
            )}

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
            {userID !== null ? (
              <li
                onClick={() => {
                  setLocationActive(!locationActive);
                }}
              >
                <i className="bi bi-geo-alt-fill"></i>
              </li>
            ) : (
              <li>
                <Link to={ROUTES.LOGIN}>
                  <i className="bi bi-geo-alt-fill"></i>
                </Link>
              </li>
            )}
            <li>
              <Link to={userID ? ROUTES.ACCOUNT : ROUTES.LOGIN}>
                <i className="bi bi-person-fill"></i>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      {cartActive ? <Cart  /> : null}
      {locationActive ? <LocationSelect /> : null}
    </>
  );
}

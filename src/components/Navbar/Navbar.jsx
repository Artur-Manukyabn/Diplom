import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import "./Navbar.scss";
import ROUTES from "../../routes";
import Cart from "../Cart/Cart";
import axios from "axios";

export default function Navbar() {
  const [cartActive, setCartActive] = useState(false);
  const [activPage, setactivPage] = useState("home");
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
            <li
              className={classNames({
                active: activPage == "home",
              })}
            >
              <Link
                to={ROUTES.HOME}
                onClick={() => {
                  setactivPage("home");
                }}
              >
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
            <li
              className={classNames({
                active: activPage == "about",
              })}
            >
              <Link
                to={ROUTES.ABOUT}
                onClick={() => {
                  setactivPage("about");
                }}
              >
                <i className="bi bi-info-circle-fill"></i>
              </Link>
            </li>
            <li
              className={classNames({
                active: activPage == "acount",
              })}
            >
              <Link to={userID ? ROUTES.ACCOUNT : ROUTES.LOGIN}>
                <i
                  className="bi bi-person-fill"
                  onClick={() => {
                    setactivPage("acount");
                  }}
                ></i>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      {cartActive ? <Cart /> : null}
    </>
  );
}

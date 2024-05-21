import React from "react";
import ROUTES from "../../routes";
import { Link } from "react-router-dom";
import "./Footer.scss";
export default function Footer() {
  return  <footer className="footer">
  <div className="container">
      <div className="row">
          <div className="footer__colum">
              <h4>company</h4>
              <ul>
                  <li><Link to={ROUTES.ABOUT}>about us</Link></li>
                  <li><Link to={ROUTES.HOME}>our services</Link></li>
                  <li><Link to="#">privacy policy</Link></li>
                  <li><Link to="#">affiliate program</Link></li>
              </ul>
          </div>
          <div className="footer__colum">
              <h4>get help</h4>
              <ul>
                  <li><Link to="#">FAQ</Link></li>
                  <li><Link to="#">shipping</Link></li>
                  <li><Link to="#">returns</Link></li>
                  <li><Link to="#">order status</Link></li>
                  <li><Link to="#">payment options</Link></li>
              </ul>
          </div>
          <div className="footer__colum">
              <h4>online shop</h4>
              <ul>
                  <li><Link to="/catalog/Guitar">Guitars</Link></li>
                  <li><Link to="/catalog/Piano">Piano</Link></li>
                  <li><Link to="/catalog/Drum">Drums</Link></li>
                  <li><Link to="/catalog/Sintezators">Sintezators</Link></li>
              </ul>
          </div>
          <div className="footer__colum">
              <h4>follow us</h4>
              <div className="social__links">
                  <Link to="https://www.facebook.com"><i className="bi bi-facebook"></i></Link>
                  <Link to="https://www.twitter.com"><i className="bi bi-twitter"></i></Link>
                  <Link to="https://www.instagram.com"><i className="bi bi-instagram"></i></Link>
                  <Link to="https://www.linkedin.com"><i className="bi bi-linkedin"></i></Link>
              </div>
          </div>
      </div>
  </div>
</footer>;
}

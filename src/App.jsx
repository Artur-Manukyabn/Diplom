import React, { useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import "./App.scss";
import Home from "./components/Pages/Home/Home";
import Account from "./components/Pages/Account/Account";
import About from "./components/Pages/About/About";
import Settings from "./components/Pages/Settings/Settings";
import Catalog from "./components/Pages/Catalog/Catalog";
import ROUTES from "./routes";
import SingleProduct from "./components/Pages/SingleProduct/SingleProduct";
import axios from "axios";
import Login from "./components/Pages/Login/Login";
import Footer from "./components/Footer/Footer";

export default function App() {
  useEffect(() => {
    localStorage.setItem("signed", false);
    // localStorage.setItem("user",null)
  }, []);
  return (
    <div className="App">
      <Navbar />
      <main>
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />}></Route>
        <Route path={ROUTES.ACCOUNT} element={<Account />}></Route>
        <Route path={ROUTES.ABOUT} element={<About />}></Route>
        <Route path={ROUTES.SETTINGS} element={<Settings />}></Route>
        <Route path={ROUTES.CATALOG} element={<Catalog />}></Route>
        <Route path={ROUTES.SINGLEPRODUCT} element={<SingleProduct />}></Route>
        <Route path={ROUTES.LOGIN} element={<Login />}></Route>
      </Routes>
      </main>
      <Footer />
    </div>
  );
}

import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import "./App.scss";
import Home from "./components/Pages/Home/Home";
import Account from "./components/Pages/Account/Account";
import About from "./components/Pages/About/About";
import Settings from "./components/Pages/Settings/Settings";
import Catalog from "./components/Pages/Catalog/Catalog";
import ROUTES from "./routes";

export default function App() {
  
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />}></Route>
        <Route path={ROUTES.ACCOUNT} element={<Account />}></Route>
        <Route path={ROUTES.ABOUT} element={<About />}></Route>
        <Route path={ROUTES.SETTINGS} element={<Settings />}></Route>
        <Route path={ROUTES.CATALOG} element={<Catalog />}></Route>
      </Routes>
    </div>
  );
}

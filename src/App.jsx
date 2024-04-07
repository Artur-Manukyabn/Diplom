import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import "./App.scss";
import Home from "./components/Pages/Home/Home";
import Account from "./components/Pages/Account/Account";
import About from "./components/Pages/About/About";
import Settings from "./components/Pages/Settings/Settings";
export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/account" element={<Account />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/settings" element={<Settings />}></Route>
      </Routes>
    </div>
  );
}

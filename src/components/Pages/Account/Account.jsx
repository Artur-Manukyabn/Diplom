import axios from "axios";
import React, { useState, useEffect } from "react";
import "./Account.scss";

export default function Account() {
  const [user, setUser] = useState({});
  useEffect(() => {
    axios("http://localhost:3000/users").then((res) => {
      setUser(res.data[0]);
    });
  }, []);
  return (
    <div className="Account">
      <div className="Account__card">
        <i className="bi bi-pencil-fill"></i>
        <img src={user.image} alt="" />
        <h2>
          <i className="bi bi-person-fill"></i>
          {user.username}
        </h2>
        <p>
          <i className="bi bi-credit-card"></i>
          {user.card}
        </p>
        <button>
          Sign Out<i className="bi bi-box-arrow-left"></i>
        </button>
      </div>
      <div className="Account__purchases"></div>
    </div>
  );
}

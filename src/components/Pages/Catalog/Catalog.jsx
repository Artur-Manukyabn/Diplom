import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "@smastrom/react-rating/style.css";
import "./Catalog.scss";
import { Rating } from "@smastrom/react-rating";
import { cutText } from "../../../helpers/cutText";

export default function Catalog() {
  const { id } = useParams();
  const [filteredInstrument, setFilteredInstrument] = useState([]);

  useEffect(() => {
    axios("http://localhost:3000/musical_instruments").then((res) => {
      const response = res.data.filter((item) => {
        return item.type.toLowerCase().includes(id.toLowerCase());
      });
      setFilteredInstrument(response);
    });
  }, []);
  return (
    <div className="Catalog">
      <h1>catalog</h1>
      <div className="Catalog__items">
        {
        filteredInstrument.map((elem) => {
          return (
            <div key={elem.id} className="Catalog__card">
              <img src={elem.image} alt={elem.title} />
              <h3>{elem.title}</h3>
              <p>{cutText(elem.description, 100)}</p>
              <Rating style={{ maxWidth: 150 }} value={elem?.rating} readOnly />
            </div>
          );
        })
        }
      </div>
    </div>
  );
}

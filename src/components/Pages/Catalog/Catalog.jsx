import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import ReactPaginate from "react-paginate";
import { cutText } from "../../../helpers/cutText";
import "@smastrom/react-rating/style.css";
import { Rating } from "@smastrom/react-rating";
import "./Catalog.scss";

export default function Catalog() {
  const { type } = useParams();
  const [filteredInstrument, setFilteredInstrument] = useState([]);
  const [user, setUser] = useState([]);
  const [instruments, setInstruments] = useState([]);
  const userID = localStorage.getItem("user");
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(6);

  function paginate(array, pageSize, pageNumber) {
    return array?.slice((pageNumber - 1) * pageSize, pageNumber * pageSize);
  }
  useEffect(() => {
    axios("http://localhost:3000/musical_instruments").then((res) => {
      const response = res.data.filter((item) => {
        return item.type?.toLowerCase().includes(type.toLowerCase());
      });
      setFilteredInstrument(response);
    });
    axios(`http://localhost:3000/users/${userID}`).then((res) => {
      setUser(res.data);
    });
  }, []);

  useEffect(() => {
    setInstruments(paginate(filteredInstrument, perPage, page));
  }, [filteredInstrument]);

  useEffect(() => {
    setInstruments(paginate(filteredInstrument, perPage, page));
  }, [perPage, page]);

  const addCart = (id) => {
    const newCart = [...user.cart, id];
    if (user.cart.includes(id)) {
      return;
    }
    axios
      .patch(`http://localhost:3000/users/${userID}`, {
        ...user,
        cart: newCart,
      })
      .then((res) => {
        setUser(res.data);
      });
  };

  const handlePageClick = ({ selected }) => {
    setPage(selected + 1);
  };

  return (
    <div className="Catalog">
      <h1>{type}s</h1>
      <div className="Catalog__cards">
        {instruments?.map((elem) => {
          return (
            <div key={elem.id} className="Catalog__card">
              <img src={elem.image} alt={elem.title} />
              <h3>{elem.name}</h3>
              <p>{cutText(elem.description, 100)}</p>
              <Rating style={{ maxWidth: 150 }} value={elem?.rating} readOnly />
              <div className="Catalog__buttons">
                <Link to={elem.id}>Read more</Link>
                <button
                  onClick={() => {
                    addCart(+elem.id);
                  }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <ReactPaginate
        nextLabel={<i className="bi bi-arrow-right-circle"></i>}
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={Math.ceil(filteredInstrument.length / perPage)}
        previousLabel={<i className="bi bi-arrow-left-circle"></i>}
        renderOnZeroPageCount={null}
        className="Catalog__pagination"
      />
    </div>
  );
}

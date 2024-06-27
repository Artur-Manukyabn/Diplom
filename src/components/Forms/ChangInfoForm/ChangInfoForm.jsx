import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { object, string } from "yup";
import * as Yup from "yup";
import axios from "axios";
import "./ChangInfoForm.scss";
export default function ChangInfoForm() {
  const [user, setuser] = useState(null);
  const userID = localStorage.getItem("user");
  useEffect(() => {
    axios(`http://localhost:3000/users/${userID}`).then((res) =>
      setuser(res.data)
    );
  }, []);

  const validationSchema = object({
    image: Yup.string(),
    card: Yup.string(),
  });
  const onSubmit = (value, { resetForm }) => {
    const newUSer = {
      ...user,
      image: value.image,
      card: value.card,
    };
    axios.put(`http://localhost:3000/users/${userID}`, newUSer).then((res) => {
      console.log(res.data);
    });
    resetForm();
    window.location.href = "/account";
  };
  const initialValues = {
    image: "",
    card: "",
  };
  return (
    <div className="ChangInfoForm">
      <Formik
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        initialValues={initialValues}
      >
        <Form>
          <div className="ChangInfoForm__inputDiv">
            <label htmlFor="image">
              <i class="bi bi-person-fill"></i>Image
            </label>
            <Field type="file" name="image" />
            <ErrorMessage component="p" name="image" />
          </div>
          <div className="ChangInfoForm__inputDiv ">
            <label htmlFor="card">
              <i class="bi bi-credit-card"></i>Card
            </label>
            <Field type="text" name="card" />
            <ErrorMessage component="p" name="card" />
          </div>
          <input type="submit" value="Save" />
        </Form>
      </Formik>
    </div>
  );
}

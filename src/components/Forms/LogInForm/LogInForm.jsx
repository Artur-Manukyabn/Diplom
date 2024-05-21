import React, { useEffect, useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { object, string } from "yup";
import * as Yup from "yup";
import "./LogInForm.scss";
import classNames from "classnames";
import axios from "axios";

export default function LogInForm({ active }) {
  const [user, setUser] = useState(null);
  const [allUser, setAllUser] = useState([]);

  const validationSchema = object({
    email: string().email().min(5).required("No Email provided."),
    password: string()
      .required("No password provided.")
      .min(8, "Password must have 8 chars minimum.")
      .max(15, "Password must have 15 chars maximum.")
      .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
  });
  useEffect(() => {
    axios("http://localhost:3000/users").then((res) => setAllUser(res.data));
  }, []);

  const onSubmit = (values) => {
    if (
      allUser?.some(
        (elem) =>
          elem.email === values.email && elem.password === values.password
      )
    ) {
      const currentUSer = allUser?.find((elem) => elem.email === values.email);
      setUser(currentUSer);
      localStorage.setItem("user",currentUSer.id)
      window.location.href="/account"

      return;
    }
  };
  const initialValues = {
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  return (
    <>
      <Formik
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        initialValues={initialValues}
      >
        <Form
          className={classNames("LogInForm", {
            LogInForm__active: active == "Log In",
          })}
        >
          <div className="LogInForm__inputDiv">
            <label htmlFor="email">E-MAIL</label>
            <Field type="email" name="email" />
            <ErrorMessage component="p" name="email" />
          </div>
          <div className="LogInForm__inputDiv">
            <label htmlFor="password">PASSWORD</label>
            <Field type="password" name="password" />
            <ErrorMessage component="p" name="password" />
          </div>
          <input type="submit" value="Log In" />
        </Form>
      </Formik>
    </>
  );
}

import React, { useEffect, useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { object, string } from "yup";
import * as Yup from "yup";
import "./RegistrForm.scss";
import classNames from "classnames";
import axios from "axios";
import { customAlphabet } from "nanoid";

export default function RegistrForm({ active }) {
  const [usersLenght, setUsersLenght] = useState(0);
  useEffect(() => {
    axios("http://localhost:3000/users")
    .then(res=>setUsersLenght(res.data.length+1))
  }, [])
  


  const validationSchema = object({
    userName: string()
      .min(5, "User Name must be at least 5 characters")
      .max(10, "User Name must be at least 10 characters")
      .required("No User Name provided."),
    email: string().email().min(5).required("No Email provided."),
    password: string()
      .required("No password provided.")
      .min(8, "Password must have 8 chars minimum.")
      .max(15, "Password must have 15 chars maximum.")
      .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
    passwordConfirmation: Yup.string().oneOf(
      [Yup.ref("password"), null],
      "Passwords must match"
    ),
    toggle:Yup.boolean().oneOf([true])
  });
  const [userCreated, setuserUserCreated] = useState(null);
  const onSubmit = (values,{ resetForm } ) => {
    axios("http://localhost:3000/users").then(res=>setuserUserCreated(res.data))
    if(userCreated?.some(elem=>elem.email === values.email || elem.username === values.userName) ){
      resetForm()
      return
    }
    const newUser = {
      ...values,
      id:usersLenght.toString(),
      image:"https://static.vecteezy.com/system/resources/previews/027/708/418/large_2x/default-avatar-profile-icon-in-flat-style-free-vector.jpg",
      card:"",
      purchases:[],
      fav:[],
      cart:[]
    }
    axios.post("http://localhost:3000/users",newUser)
    resetForm()
    localStorage.setItem("user",newUser.id)
    window.location.href = "/account"
  };
  const initialValues = {
    userName: "",
    email: "",
    password: "",
    passwordConfirmation: "",
    toggle:false
  };
  return (
    <>
      <Formik
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        initialValues={initialValues}
      >
        <Form
          className={classNames("RegistrForm", {
            RegistrForm__active: active === "registr",
          })}
        >
          <div className="RegistrForm__inputDiv">
            <label htmlFor="userName">USERNAME</label>
            <Field type="text" name="userName" />
            <ErrorMessage className="error" component="p" name="userName" />
          </div>
          <div className="RegistrForm__inputDiv">
            <label htmlFor="email">E-MAIL</label>
            <Field type="email" name="email" />
            <ErrorMessage component="p" name="email" />
          </div>
          <div className="RegistrForm__inputDiv">
            <label htmlFor="password">PASWORD</label>
            <Field type="password" name="password" />
            <ErrorMessage component="p" name="password" />
          </div>
          <div className="RegistrForm__inputDiv">
            <label htmlFor="passwordConfirmation">CONFIRM PASSWORD</label>
            <Field type="password" name="passwordConfirmation" />
            <ErrorMessage component="p" name="passwordConfirmation" />
          </div>
          <label className="RegistrForm__checkBox">
            <Field type="checkbox" name="toggle" />
            <p> I agree to the Terms and Conditions</p>
          </label>
          <input type="submit" value="Register" />
        </Form>
      </Formik>
    </>
  );
}

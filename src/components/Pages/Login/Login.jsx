import React, { useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { object, string } from "yup";
import * as Yup from "yup";
import RegistrForm from "../../Forms/RegistrForm/RegistrForm";
import "./Login.scss";
import LogInForm from "../../Forms/LogInForm/LogInForm";
import classNames from "classnames";

export default function Login() {
  const [form, setForm] = useState("Log In");
  return (
    <div className="LogIn">
      <div className="LogIn__mainForm">
        <div className="LogIn__ChangeForms">
          <h2
            className={classNames({
              LogIn__activeFormButton: form === "Log In",
            })}
            onClick={() => {
              setForm("Log In");
            }}
          >
            SIGN IN
          </h2>
          <h2
            className={classNames({
              LogIn__activeFormButton: form === "registr",
            })}
            onClick={() => {
              setForm("registr");
            }}
          >
            SIGN UP
          </h2>
        </div>
        <RegistrForm active={form} /> 
        <LogInForm active={form} />

      </div>
    </div>
  );
}

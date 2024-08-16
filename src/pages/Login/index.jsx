import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import TextField from "../../components/TextField";
import styles from "../../styles/login.module.css";
import FormsCard from "../../components/FormsCard";

const Login = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");

  const navigate = useNavigate();

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isValidName = (name) => {
    return name.trim() !== "";
  };

  const handleClick = () => {
    if (!isValidName(name)) {
      setNameError("Please enter a valid name.");
    } else {
      setNameError("");
      navigate("/Home");
    }

    if (!isValidEmail(email)) {
      setEmailError("Please enter a valid email address.");
    } else {
      setEmailError("");
      navigate("/Home");
    }
  };

  return (
    <div className={styles.container}>
      <FormsCard
        titleCard={"QuickTasks"}
        subTitle={"Identifique-se para prosseguir"}
        identification
        className={styles.container}
      >
        <TextField
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {nameError && <p className={styles.errorText}>{nameError}</p>}

        <p className={styles.orText}>Or</p>

        <TextField
          type={email}
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {emailError && <p className={styles.errorText}>{emailError}</p>}

        <Button titleButton="Entrar" onClick={handleClick} />
      </FormsCard>
    </div>
  );
};

export default Login;

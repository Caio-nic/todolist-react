import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import TextField from "../../components/TextField";
import styles from "../../styles/login.module.css";
import FormsCard from "../../components/FormsCard";
import { useAuth } from "../../context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");

  const { setUser } = useAuth();
  const navigate = useNavigate();

  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isValidName = (name) => name.trim() !== "";

  const handleClick = () => {
    let valid = true;
    setNameError("");
    setEmailError("");

    if (name && !isValidName(name)) {
      setNameError("Please enter a valid name.");
      valid = false;
    }

    if (email && !isValidEmail(email)) {
      setEmailError("Please enter a valid email address.");
      valid = false;
    }

    if (valid && (isValidName(name) || isValidEmail(email))) {
      setUser({ name, email });
      navigate("/Home");
    }
  };

  const isSubmitEnabled = isValidName(name) || isValidEmail(email);

  return (
    <div className={styles.container}>
      <FormsCard
        titleCard={"QuickTasks"}
        subTitle={"Identifique-se para prosseguir"}
        identification
      >
        <TextField
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          aria-label="Name"
        />
        {nameError && <p className={styles.errorText}>{nameError}</p>}

        <p className={styles.orText}>Or</p>

        <TextField
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          aria-label="Email"
        />
        {emailError && <p className={styles.errorText}>{emailError}</p>}

        <Button 
          titleButton="Entrar" 
          onClick={handleClick}
          disabled={!isSubmitEnabled}
        />
      </FormsCard>
    </div>
  );
};

export default Login;

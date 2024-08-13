import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import TextField from "../../components/TextField";
import styles from "../../styles/login.module.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const navigate = useNavigate();
  const goToHome = () => {
    navigate("/Home");
  };
  return (
    <div className={styles.container}>
      <p>Aqui é o Login</p>
      <TextField
        type={"text"}
        placeholder={"Name"}
        value={name}
        onChange={(e) => setName(e.target.value)}
        // className
      />
      <p>Ou</p>
      <TextField
        placeholder={"Email"}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        // className
      />
      <Button title={"SOU UM BOTÃO"} onClick={goToHome} />
    </div>
  );
};

export default Login;

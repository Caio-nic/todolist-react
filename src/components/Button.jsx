import React from "react";
import { useState } from "react";
import styles from "../styles/Button.module.css";

const Button = ({ onClick, titleButton }) => {
  return (
    <button className={styles.container} onClick={onClick}>
      <p className={styles.title}>{titleButton}</p>
    </button>
  );
};

export default Button;

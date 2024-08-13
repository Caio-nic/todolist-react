import React from "react";
import { useState } from "react";
import styles from "../styles/Button.module.css";

const Button = ({ onClick, title }) => {
  return (
    <div className={styles.container} onClick={onClick}>
      <p className={styles.title}>{title}</p>
    </div>
  );
};

export default Button;

import React from "react";
import styles from "../styles/TextField.module.css";

const TextField = ({ type, placeholder, value, onChange, ...props }) => {
  return (
    <input
      className={styles.container}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      {...props}
    />
  );
};

export default TextField;

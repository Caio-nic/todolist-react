import React from "react";
import styles from "../styles/Card.module.css";

export const Card = ({ title, children }) => {
  return (
    <div className={styles.cardLogin}>
      <div className={styles.cardHeader}>
        <p className={styles.title}>{title}</p>
        {children}
      </div>
    </div>
  );
};

export default Card;

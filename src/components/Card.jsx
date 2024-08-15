import React from "react";
import styles from "../styles/Card.module.css";
// duvida, é função do card renderizar o second block ou onde ele for apliado
export const Card = ({ titleCard, subTitle, children, identification = false }) => {
  return (
    <div className={styles.cardLogin}>
    {identification ? (
      <div>
        <div className={styles.firstBlock}>
        </div> 
        <div className={styles.secondBlock} >
          <p className={styles.title}>{titleCard}</p>
          <p className={styles.subTitle}>{subTitle}</p>
          {children}
        </div>
      </div>
    ) : (
        <div className={styles.cardHeader}>
           {titleCard}
           {subTitle}
          {children}
        </div>
    )}
  </div>
  
  );
};

export default Card;

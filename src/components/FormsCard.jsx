import React from "react";
import styles from "../styles/FormsCard.module.css";
// duvida, é função do card renderizar o second block ou onde ele for aplicado
export const FormsCard = ({
  titleCard,
  subTitle,
  children,
  identification = false,
}) => {
  return (
    <forms className={styles.cardLogin}>
      {identification ? (
        <div>
          <div className={styles.firstBlock}></div>
          <div className={styles.secondBlock}>
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
    </forms>
  );
};

export default FormsCard;

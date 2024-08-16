// Sidebar.js
import React from "react";
import styles from "../styles/Sidebar.module.css";
import { useAuth } from "../context/AuthContext";
import profileImage from "../assets/images/profile.png";

const Sidebar = () => {
  const { user } = useAuth();

  return (
    <div className={styles.sidebar}>
      <div className={styles.profile}>
        <img src={profileImage} alt="Profile" className={styles.profilePic} />
        <h2 className={styles.profileName}>{user.name}</h2>
        <h2 className={styles.profileName}>{user.email}</h2>
      </div>
      <div className={styles.menuSection}>
        <h3 className={styles.sectionTitle}>Tasks</h3>
        <div className={styles.menuItem}>
          <p href="">All</p>
        </div>
        <div className={styles.menuItem}>
          <p>ToDo</p>
        </div>
        <div className={styles.menuItem}>
          <p>Working</p>
        </div>
        <div className={styles.menuItem}>
          <p>Done</p>
        </div>
      </div>
      <div className={styles.menuSection}>
        <h3 className={styles.sectionTitle}>Configurações</h3>
        <div className={styles.menuItem}>
          <a href="./">Sair</a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

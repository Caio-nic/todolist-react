import React from "react";
import { Link } from "react-router-dom";
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
          <Link to="/home">Home</Link>
        </div>
        <div className={styles.menuItem}>
          <Link to="/todo">ToDo</Link>
        </div>
        <div className={styles.menuItem}>
          <Link to="/working">Working</Link>
        </div>
        <div className={styles.menuItem}>
          <Link to="/done">Done</Link>
        </div>
      </div>
      <div className={styles.menuSection}>
        <h3 className={styles.sectionTitle}>Configuration</h3>
        <div className={styles.menuItem}>
          <Link to="/logout">Logout</Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

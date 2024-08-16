// Sidebar.js
import React from 'react';
import styles from '../styles/Sidebar.module.css';

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.profile}>
        <img src="https://via.placeholder.com/100" alt="Profile" className={styles.profilePic} />
        <h2 className={styles.profileName}>Name</h2>
      </div>
      <div className={styles.menuSection}>
        <h3 className={styles.sectionTitle}>Tasks</h3>
        <div className={styles.menuItem}>
          <p href="#tarefas">All</p>
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
          <a href="#relatorios">Sair</a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

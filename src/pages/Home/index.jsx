import React from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import styles from "../../styles/home.module.css"
import TaskCard from "../../components/TaskCard";

const Home = () => {
  return (
    <div className={styles.container}>
      <Sidebar className={styles.sidebar}/>
      <div className={styles.mainContent}>
        <div className={styles.taskCards}>
          <TaskCard title={'Todo'} canAddTask={true} />
          <TaskCard title={'Working'} />
          <TaskCard title={'Done'} />
        </div>
      </div>
    </div>
  );
};

export default Home;



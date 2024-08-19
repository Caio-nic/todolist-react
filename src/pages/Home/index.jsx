import React, { useState } from "react";
import Sidebar from "../../components/Sidebar";
import styles from "../../styles/home.module.css";
import TaskCard from "../../components/TaskCard";

const Home = () => {
  const [todoTasks, setTodoTasks] = useState([]);
  const [workingTasks, setWorkingTasks] = useState([]);
  const [doneTasks, setDoneTasks] = useState([]);

  const addTaskToTodo = (task) => {
    setTodoTasks([...todoTasks, task]);
  };

  const startTask = (taskIndex) => {
    const task = todoTasks[taskIndex];
    setTodoTasks(todoTasks.filter((_, index) => index !== taskIndex));
    setWorkingTasks([...workingTasks, task]);
  };

  const completeTask = (taskIndex) => {
    const task = workingTasks[taskIndex];
    setWorkingTasks(workingTasks.filter((_, index) => index !== taskIndex));
    setDoneTasks([...doneTasks, task]);
  };

  return (
    <div className={styles.container}>
      <Sidebar className={styles.sidebar} />
      <div className={styles.mainContent}>
        <div className={styles.taskCards}>
          <TaskCard
            title="Todo"
            tasks={todoTasks}
            canAddTask={true}
            onAddTask={addTaskToTodo}
            onStartTask={startTask}
          />
          <TaskCard
            title="Working"
            tasks={workingTasks}
            onCompleteTask={completeTask}
          />
          <TaskCard
            title="Done"
            tasks={doneTasks}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;

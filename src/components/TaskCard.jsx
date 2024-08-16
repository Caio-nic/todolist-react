import React, { useState } from 'react';
import styles from "../styles/TaskCard.module.css";
  


const TaskCard = ({ title, initialTasks = [], canAddTask = false }) => {
  const [tasks, setTasks] = useState(initialTasks);
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, newTask.trim()]);
      setNewTask('');
    }
  };

  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };

  return (
    <div className={styles.taskCard}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.tasks}>
        {tasks.length > 0 ? (
          tasks.map((task, index) => (
            <div key={index} className={styles.task}>
              {task}
            </div>
          ))
        ) : (
          <div className={styles.noTasks}>No tasks available</div>
        )}
      </div>
      {canAddTask && (
        <div className={styles.addTaskContainer}>
          <input
            type="text"
            value={newTask}
            onChange={handleInputChange}
            placeholder="Enter new task"
            className={styles.taskInput}
          />
          <button onClick={handleAddTask} className={styles.addButton}>
            Add
          </button>
        </div>
      )}
    </div>
  );
};

export default TaskCard;


import React, { useState } from "react";
import styles from "../styles/TaskCard.module.css";
import TextField from "../components/TextField";
import Button from "../components/Button";

const TaskCard = ({
  title,
  tasks = [],
  canAddTask = false,
  onAddTask,
  onStartTask,
  onCompleteTask,
}) => {
  const [newTask, setNewTask] = useState("");

  const handleAddTask = () => {
    if (newTask.trim() && onAddTask) {
      onAddTask(newTask.trim());
      setNewTask("");
    }
  };

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const titleClass = title.toLowerCase();

  return (
    <div className={styles.taskCard}>
      <h2 className={`${styles.title} ${styles[titleClass]}`}>{title}</h2>
      <div className={styles.tasks}>
        {tasks.length > 0 ? (
          tasks.map((task, index) => (
            <div key={index} className={styles.taskContainer}>
              <div className={styles.task}>{task}</div>
              <div className={styles.taskActions}>
                {title === "Todo" && onStartTask && (
                  <Button
                    onClick={() => onStartTask(index)}
                    titleButton="Start"
                    className={styles.startButton}
                  />
                )}
                {title === "Working" && onCompleteTask && (
                  <Button
                    onClick={() => onCompleteTask(index)}
                    titleButton="Complete"
                    className={styles.completeButton}
                  />
                )}
              </div>
            </div>
          ))
        ) : (
          <p>No tasks available</p>
        )}
      </div>

      {canAddTask && title !== "Done" && (
        <div className={styles.addTaskContainer}>
          <TextField
            type="text"
            placeholder="Enter new task"
            onChange={handleInputChange}
            value={newTask}
            className={styles.taskInput}
          />
          <Button
            onClick={handleAddTask}
            titleButton="Add"
            className={styles.addButton}
          />
        </div>
      )}
    </div>
  );
};

export default TaskCard;

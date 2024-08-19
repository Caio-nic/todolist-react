import React, { useState } from "react";
import TaskCard from "./TaskCard";

const TaskManager = () => {
  const [tasks, setTasks] = useState({
    todo: [],
    working: [],
    done: [],
  });

  const addTask = (task, status) => {
    setTasks((prevTasks) => ({
      ...prevTasks,
      [status]: [...prevTasks[status], task],
    }));
  };

  const startTask = (index) => {
    const task = tasks.todo[index];
    setTasks((prevTasks) => {
      const newTodo = prevTasks.todo.filter((_, i) => i !== index);
      return {
        ...prevTasks,
        todo: newTodo,
        working: [...prevTasks.working, task],
      };
    });
  };

  const completeTask = (index) => {
    const task = tasks.working[index];
    setTasks((prevTasks) => {
      const newWorking = prevTasks.working.filter((_, i) => i !== index);
      return {
        ...prevTasks,
        working: newWorking,
        done: [...prevTasks.done, task],
      };
    });
  };

  const editTask = () => {};

  const deleteTask = () => {};
  return (
    <>
      <TaskCard
        title="Todo"
        tasks={tasks.todo}
        canAddTask={true}
        onAddTask={(task) => addTask(task, "todo")}
        onStartTask={startTask}
        onCompleteTask={undefined}
      />
      <TaskCard
        title="Working"
        tasks={tasks.working}
        onCompleteTask={completeTask}
        onAddTask={undefined}
        onStartTask={undefined}
      />
      <TaskCard
        title="Done"
        tasks={tasks.done}
        onAddTask={undefined}
        onStartTask={undefined}
        onCompleteTask={undefined}
      />
    </>
  );
};

export default TaskManager;

import React, { useState, useEffect } from "react";

import "./App.css";
import TaskForm from "./components/TaskForm";
import TaskColumn from "./components/TaskColumn";
import todoIcon from "./assets/direct-hit.png";
import inProgressIcon from "./assets/glowing-star.png";
import completedIcon from "./assets/check-mark-button.png";

const oldTasks = localStorage.getItem("tasks");

const App = () => {
  const [tasks, setTasks] = useState(JSON.parse(oldTasks) || []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleDelete = (taskIndex) => {
    const newTasks = tasks.filter((task, index) => index !== taskIndex);
    setTasks(newTasks);
  };

  return (
    <div className="app">
      <TaskForm setTasks={setTasks} />
      <main className="app_main">
        <TaskColumn
          title="To do"
          icon={todoIcon}
          tasks={tasks}
          status="todo"
          handleDelete={handleDelete}
        />
        <TaskColumn
          title="In Progress"
          icon={inProgressIcon}
          tasks={tasks}
          status="inprogress"
          handleDelete={handleDelete}
        />
        <TaskColumn
          title="Completed"
          icon={completedIcon}
          tasks={tasks}
          status="completed"
          handleDelete={handleDelete}
        />
      </main>
    </div>
  );
};

export default App;

import React from "react";

import "./TaskColumn.css";
import Card from "./Card";

const TaskColumn = ({ title, icon, tasks, status, handleDelete }) => {
  return (
    <section className="task_column">
      <h2 className="task_column_head">
        <img className="task_column_icon" src={icon} alt="" />
        {title}
      </h2>
      {tasks.map(
        (task, index) =>
          task.status === status && (
            <Card
              key={index}
              title={task.task}
              tags={task.tags}
              handleDelete={handleDelete}
              index={index}
            />
          )
      )}
    </section>
  );
};

export default TaskColumn;

import React from "react";
import Task from "./Task";

const TaskList = () => {
  const projectTaks = [
    {
      taskName: "choose framework",
      taskState: true,
    },
    {
      taskName: "choose hosting",
      taskState: true,
    },
    {
      taskName: "choose pay library",
      taskState: false,
    },
  ];
  return (
    <>
      {" "}
      <h2> Project: projecto 1</h2>
      <ul className="listado-tareas">
        {projectTaks.length === 0 ? (
          <li className="tarea"></li>
        ) : (
          projectTaks.map((task) => <Task taskData={task} />)
        )}
      </ul>
      <button className="btn btn-eliminar" type="button">
        Delete Project &times;
      </button>
    </>
  );
};

export default TaskList;

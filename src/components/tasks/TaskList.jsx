import React from "react";
import Task from "./Task";
import ProjectContext from "../../context/projects/projectContext";

const TaskList = () => {
  const { activeProject, deleteProject } = React.useContext(ProjectContext);
  const projectTaks = [];

  if (!activeProject.id) {
    return <h2>Choose a project</h2>;
  }
  return (
    <>
      <h2> Project: {activeProject.projectName}</h2>
      <ul className="listado-tareas">
        {projectTaks.length === 0 ? (
          <li className="tarea"></li>
        ) : (
          projectTaks.map((task) => <Task taskData={task} />)
        )}
      </ul>
      <button
        onClick={() => deleteProject(activeProject.id)}
        className="btn btn-eliminar"
        type="button"
      >
        Delete Project &times;
      </button>
    </>
  );
};

export default TaskList;

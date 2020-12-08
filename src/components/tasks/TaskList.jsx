import React from "react";
import Task from "./Task";
import ProjectContext from "../../context/projects/projectContext";
import TaskContext from "../../context/tasks/taskContext";

const TaskList = () => {
  const { activeProject, deleteProject } = React.useContext(ProjectContext);
  const { projectTasks, getProjectsTaks } = React.useContext(TaskContext);

  //get projects
  React.useEffect(() => {
    getProjectsTaks(activeProject.id);
    // eslint-disable-next-line
  }, [activeProject]);

  if (!activeProject.id) {
    return <h2>Choose a project</h2>;
  }

  return (
    <>
      <h2> Project: {activeProject.projectName}</h2>
      <ul className="listado-tareas">
        {projectTasks.length === 0 ? (
          <li className="tarea">
            <p>There is any Task.</p>
          </li>
        ) : (
          projectTasks.map((task) => <Task key={task.id} taskData={task} />)
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

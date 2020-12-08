import React from "react";

import ProjectContext from "../../context/projects/projectContext";
import TaskContext from "../../context/tasks/taskContext";

const FormTask = () => {
  const { activeProject } = React.useContext(ProjectContext);
  const {
    addNewTask,
    taskValidation,
    taskError,
    getProjectsTaks,
  } = React.useContext(TaskContext);

  const [taskData, setTaskData] = React.useState({
    taskName: "",
  });

  const { taskName } = taskData;

  if (!activeProject.id) {
    return null;
  }

  const handleChange = (e) => {
    setTaskData({
      ...taskData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName.trim() === "") {
      taskValidation();
      return null;
    }
    taskData.projectId = activeProject.id;
    taskData.taskState = false;
    addNewTask(taskData);

    //get active project task
    getProjectsTaks(taskData.projectId);

    setTaskData({
      taskName: "",
    });
  };

  return (
    <div className="formulario">
      <form onSubmit={handleSubmit}>
        <div className="contenedor-input">
          <input
            type="text"
            name="taskName"
            className="input-text"
            id="taskName"
            placeholder="Task's name here."
            value={taskName}
            onChange={handleChange}
          />
        </div>
        <div className="contenedor-input">
          <input
            className="btn btn-primario btn-submit btn-block"
            type="submit"
            value="Add new task"
          />
        </div>
      </form>
      {taskError && <p className="mensaje error">Task name is required.</p>}
    </div>
  );
};

export default FormTask;

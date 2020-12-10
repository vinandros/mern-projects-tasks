import React, { useEffect } from "react";

import ProjectContext from "../../context/projects/projectContext";
import TaskContext from "../../context/tasks/taskContext";

const FormTask = () => {
  const { activeProject } = React.useContext(ProjectContext);
  const {
    addNewTask,
    taskValidation,
    taskError,
    getProjectsTaks,
    activeTask,
    updateTask,
    clearActiveTask,
  } = React.useContext(TaskContext);

  const [taskData, setTaskData] = React.useState({
    name: "",
  });
  useEffect(() => {
    if (activeTask.name) {
      setTaskData(activeTask);
    } else {
      setTaskData({
        name: "",
      });
    }
  }, [activeTask]);

  const { name } = taskData;

  if (!activeProject._id) {
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

    if (name.trim() === "") {
      taskValidation();
      return null;
    }
    if (activeTask._id === undefined) {
      taskData.projectId = activeProject._id;
      taskData.state = false;
      addNewTask(taskData);
    } else {
      updateTask(taskData);
      clearActiveTask();
    }

    //get active project task
    getProjectsTaks(taskData.projectId);

    setTaskData({
      name: "",
    });
  };

  return (
    <div className="formulario">
      <form onSubmit={handleSubmit}>
        <div className="contenedor-input">
          <input
            type="text"
            name="name"
            className="input-text"
            id="name"
            placeholder="Task's name here."
            value={name}
            onChange={handleChange}
          />
        </div>
        <div className="contenedor-input">
          <input
            className="btn btn-primario btn-submit btn-block"
            type="submit"
            value={activeTask._id ? "Save" : "Add new task"}
          />
        </div>
      </form>
      {taskError && <p className="mensaje error">Task name is required.</p>}
    </div>
  );
};

export default FormTask;

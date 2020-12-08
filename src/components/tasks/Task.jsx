import React from "react";
import TaskContext from "../../context/tasks/taskContext";

const Task = ({ taskData }) => {
  const { deleteTask, getProjectsTaks, changeTaskState } = React.useContext(
    TaskContext
  );

  const handleTaskState = (task) => {
    if (task.taskState) {
      task.taskState = false;
    } else {
      task.taskState = true;
    }
    changeTaskState(task);
  };

  return (
    <li className="tarea sombra">
      <p>{taskData.taskName}</p>
      <div className="estado">
        {taskData.taskState ? (
          <button
            type="button"
            className="completo"
            onClick={() => handleTaskState(taskData)}
          >
            finished
          </button>
        ) : (
          <button
            type="button"
            className="incompleto"
            onClick={() => handleTaskState(taskData)}
          >
            Pendenting
          </button>
        )}
      </div>
      <div className="acciones">
        <button type="button" className="btn btn-primario">
          Edit
        </button>
        <button
          type="button"
          onClick={() => {
            deleteTask(taskData.id);
            getProjectsTaks(taskData.projectId);
          }}
          className="btn btn-secundario"
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default Task;

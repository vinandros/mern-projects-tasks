import React from "react";
import TaskContext from "../../context/tasks/taskContext";

const Task = ({ taskData }) => {
  const { deleteTask, getProjectsTaks } = React.useContext(TaskContext);

  return (
    <li className="tarea sombra">
      <p>{taskData.taskName}</p>
      <div className="estado">
        {taskData.taskState ? (
          <button type="button" className="completo">
            finished
          </button>
        ) : (
          <button type="button" className="incompleto">
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

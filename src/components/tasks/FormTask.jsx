import React from "react";

import ProjectContext from "../../context/projects/projectContext";

const FormTask = () => {
  const { activeProject } = React.useContext(ProjectContext);
  if (!activeProject.id) {
    return null;
  }
  return (
    <div className="formulario">
      <form>
        <div className="contenedor-input">
          <input
            type="text"
            name="taskName"
            className="input-text"
            id="taskName"
            placeholder="Task's name here."
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
    </div>
  );
};

export default FormTask;

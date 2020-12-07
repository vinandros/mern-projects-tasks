import React from "react";

const FormTask = () => {
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

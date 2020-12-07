import React from "react";
import ProjectContext from "../../context/projects/projectContext";

const NewProject = () => {
  const [newProjectData, setNewProjectData] = React.useState({
    projectName: "",
  });

  const {
    form,
    formError,
    showProjectForm,
    addNewProject,
    showError,
  } = React.useContext(ProjectContext);

  const handleChange = (e) => {
    setNewProjectData({
      ...newProjectData,
      [e.target.name]: e.target.value,
    });
  };

  const { projectName } = newProjectData;
  const onSubmit = (e) => {
    e.preventDefault();
    if (projectName === "") {
      showError();
      return;
    }
    addNewProject(newProjectData);
    setNewProjectData({ projectName: "" });
  };

  return (
    <>
      <button onClick={showProjectForm} className="btn btn-primario btn-block">
        New Project
      </button>
      {form && (
        <form onSubmit={onSubmit} className="formulario-nuevo-proyecto">
          <input
            type="text"
            name="projectName"
            id="projectName"
            className="input-text"
            value={projectName}
            onChange={handleChange}
          />

          <input
            type="submit"
            className="btn btn-primario btn-block"
            value="Add new project"
          />
        </form>
      )}
      {formError && <p className="mensaje error">Project name is required</p>}
    </>
  );
};

export default NewProject;

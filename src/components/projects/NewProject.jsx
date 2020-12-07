import React from "react";

const NewProject = () => {
  const [newProjectData, setNewProjectData] = React.useState({
    projectName: "",
    //  projectId:
  });

  const handleChange = (e) => {
    setNewProjectData({
      ...newProjectData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  const { projectName } = newProjectData;
  return (
    <>
      <button className="btn btn-primario btn-block">New Project</button>{" "}
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
    </>
  );
};

export default NewProject;

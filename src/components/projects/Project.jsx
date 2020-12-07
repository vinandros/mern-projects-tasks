import React from "react";

import ProjectContext from "../../context/projects/projectContext";

const Project = ({ projectData }) => {
  const { setActiveProject } = React.useContext(ProjectContext);
  return (
    <li>
      <button
        type="button"
        onClick={() => setActiveProject(projectData.id)}
        className="btn btn-blank"
      >
        {projectData.projectName}
      </button>
    </li>
  );
};

export default Project;

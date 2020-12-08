import React from "react";

import ProjectContext from "../../context/projects/projectContext";
import TaskContext from "../../context/tasks/taskContext";

const Project = ({ projectData }) => {
  const { setActiveProject } = React.useContext(ProjectContext);
  const { getProjectsTaks } = React.useContext(TaskContext);

  return (
    <li>
      <button
        type="button"
        onClick={() => {
          setActiveProject(projectData.id);
          getProjectsTaks(projectData.id);
        }}
        className="btn btn-blank"
      >
        {projectData.projectName}
      </button>
    </li>
  );
};

export default Project;

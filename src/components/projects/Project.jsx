import React from "react";

const Project = ({ projectData }) => {
  return (
    <li>
      <button type="button" className="btn btn-blank">
        {projectData.projectName}
      </button>
    </li>
  );
};

export default Project;

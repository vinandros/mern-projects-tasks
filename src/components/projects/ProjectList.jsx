import React from "react";
import Project from "./Project";

import ProjectContext from "../../context/projects/projectContext";

const ProjectList = () => {
  const { projects, requestProjects } = React.useContext(ProjectContext);

  //get projects
  React.useEffect(() => {
    requestProjects([]);
    // eslint-disable-next-line
  }, []);

  if (projects.length === 0) {
    return null;
  }

  return (
    <ul className="listado-proyectos">
      {projects.map((project) => {
        return <Project key={project.id} projectData={project} />;
      })}
    </ul>
  );
};

export default ProjectList;

import React from "react";
import Project from "./Project";
const ProjectList = () => {
  const projects = [
    { projectName: "ecommerce" },
    { projectName: "play projects" },
    { projectName: "agnci of FBI" },
  ];
  return (
    <ul className="listado-proyectos">
      {projects.map((project) => {
        return <Project projectData={project} />;
      })}
    </ul>
  );
};

export default ProjectList;

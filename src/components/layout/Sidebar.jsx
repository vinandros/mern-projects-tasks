import React from "react";
import NewProject from "../projects/NewProject";
import ProjectList from "../projects/ProjectList";
import projectContext from "../../context/projects/projectContext";
const Sidebar = () => {
  return (
    <aside>
      <h1>
        PROJECTS<span> handler</span>
      </h1>
      <NewProject />
      <div className="proyectos">
        <h2>Your projects</h2>
        <ProjectList />
      </div>
    </aside>
  );
};

export default Sidebar;

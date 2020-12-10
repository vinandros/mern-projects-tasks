import React from "react";
import Project from "./Project";

import ProjectContext from "../../context/projects/projectContext";
import AlertContext from "../../context/alerts/alertContext";

const ProjectList = () => {
  const { msg, projects, requestProjects } = React.useContext(ProjectContext);
  const { alert, showAlert } = React.useContext(AlertContext);

  //get projects
  React.useEffect(() => {
    if (msg) {
      showAlert(msg.msg, msg.category);
    }
    requestProjects([]);
    // eslint-disable-next-line
  }, [msg]);

  if (projects.length === 0) {
    return null;
  }

  return (
    <ul className="listado-proyectos">
      {alert && <div className={`alerta ${alert.category}`}>{alert.msg}</div>}
      {projects.map((project) => {
        return <Project key={project._id} projectData={project} />;
      })}
    </ul>
  );
};

export default ProjectList;

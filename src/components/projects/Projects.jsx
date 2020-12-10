import React, { useContext, useEffect } from "react";
import authenticationContext from "../../context/authentication/authenticationCotext";
import Sidebar from "../layout/Sidebar";
import Topbar from "../layout/Topbar";
import FormTask from "../tasks/FormTask";
import TaskList from "../tasks/TaskList";

const Projects = () => {
  const { getAuthenticatedUser } = useContext(authenticationContext);

  useEffect(() => {
    getAuthenticatedUser();
  }, []);
  return (
    <div className="contenedor-app">
      <Sidebar />
      <div className="seccion-principal">
        <Topbar />
        <main>
          <FormTask />
          <div className="contenedor-tareas">
            <TaskList />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Projects;

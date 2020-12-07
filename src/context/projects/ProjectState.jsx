import React from "react";
import { v4 } from "uuid";
import projectContext from "./projectContext";
import projectReducer from "./projectReducer";
import {
  FORM_PROJECT,
  REQUEST_PROJECTS,
  ADD_NEW_PROJECT,
  FORM_VALIDATION,
  ACTIVE_PROJECT,
  DELETE_PROJECT,
} from "../../types";

const ProjectState = (props) => {
  const projects = [
    { id: 1, projectName: "ecommerce" },
    { id: 2, projectName: "play projects" },
    { id: 3, projectName: "agnci of FBI" },
  ];

  const initialState = {
    projects: [],
    form: false,
    formError: false,
    activeProject: {},
  };

  const [state, dispatch] = React.useReducer(projectReducer, initialState);

  // actions creators

  const showProjectForm = () => {
    dispatch({
      type: FORM_PROJECT,
    });
  };

  const requestProjects = () => {
    dispatch({
      type: REQUEST_PROJECTS,
      payload: projects,
    });
  };

  const addNewProject = (project) => {
    project.id = v4();

    dispatch({
      type: ADD_NEW_PROJECT,
      payload: project,
    });
  };

  const showError = () => {
    dispatch({
      type: FORM_VALIDATION,
    });
  };

  const setActiveProject = (projectId) => {
    dispatch({
      type: ACTIVE_PROJECT,
      payload: projectId,
    });
  };

  const deleteProject = (projectId) => {
    dispatch({
      type: DELETE_PROJECT,
      payload: projectId,
    });
  };

  return (
    <projectContext.Provider
      value={{
        projects: state.projects,
        form: state.form,
        formError: state.formError,
        activeProject: state.activeProject,
        showProjectForm,
        requestProjects,
        addNewProject,
        showError,
        setActiveProject,
        deleteProject,
      }}
    >
      {props.children}
    </projectContext.Provider>
  );
};

export default ProjectState;

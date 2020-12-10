import React from "react";
import projectContext from "./projectContext";
import projectReducer from "./projectReducer";
import axiosClient from "../../config/axios";
import {
  FORM_PROJECT,
  REQUEST_PROJECTS,
  ADD_NEW_PROJECT,
  FORM_VALIDATION,
  ACTIVE_PROJECT,
  DELETE_PROJECT,
  PROJECT_ERROR,
} from "../../types";

const ProjectState = (props) => {
  const initialState = {
    projects: [],
    form: false,
    formError: false,
    activeProject: {},
    msg: null,
  };

  const [state, dispatch] = React.useReducer(projectReducer, initialState);

  const showProjectForm = () => {
    dispatch({
      type: FORM_PROJECT,
    });
  };

  const requestProjects = async () => {
    try {
      const res = await axiosClient.get("/projects");
      const projects = res.data.projects;
      dispatch({
        type: REQUEST_PROJECTS,
        payload: projects,
      });
    } catch (error) {
      const alert = { msg: "Something went wrong", category: "alerta-error" };
      dispatch({
        type: PROJECT_ERROR,
        payload: alert,
      });
    }
  };

  const addNewProject = async (project) => {
    try {
      const res = await axiosClient.post("/projects", project);
      const newProject = res.data;
      dispatch({
        type: ADD_NEW_PROJECT,
        payload: newProject,
      });
    } catch (error) {
      const alert = { msg: "Something went wrong", category: "alerta-error" };
      dispatch({
        type: PROJECT_ERROR,
        payload: alert,
      });
    }
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

  const deleteProject = async (projectId) => {
    try {
      await axiosClient.delete(`/projects/${projectId}`);
      dispatch({
        type: DELETE_PROJECT,
        payload: projectId,
      });
    } catch (error) {
      const alert = { msg: "Something went wrong", category: "alerta-error" };
      dispatch({
        type: PROJECT_ERROR,
        payload: alert,
      });
    }
  };

  return (
    <projectContext.Provider
      value={{
        projects: state.projects,
        form: state.form,
        msg: state.msg,
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

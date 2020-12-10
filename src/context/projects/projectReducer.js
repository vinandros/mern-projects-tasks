import {
  FORM_PROJECT,
  REQUEST_PROJECTS,
  ADD_NEW_PROJECT,
  FORM_VALIDATION,
  ACTIVE_PROJECT,
  DELETE_PROJECT,
  PROJECT_ERROR,
} from "../../types";
export default function reducer(state, action) {
  switch (action.type) {
    case FORM_PROJECT:
      return {
        ...state,
        form: true,
      };
    case REQUEST_PROJECTS:
      return {
        ...state,
        projects: action.payload,
      };
    case ADD_NEW_PROJECT:
      return {
        ...state,
        projects: [...state.projects, action.payload],
        form: false,
        formError: false,
        activeProject: action.payload,
      };
    case FORM_VALIDATION:
      return {
        ...state,
        formError: true,
      };
    case ACTIVE_PROJECT:
      return {
        ...state,
        activeProject: state.projects.filter(
          (project) => project._id === action.payload
        )[0],
      };
    case DELETE_PROJECT:
      return {
        ...state,
        projects: state.projects.filter(
          (project) => project._id !== action.payload
        ),
        activeProject: {},
      };
    case PROJECT_ERROR:
      return {
        ...state,
        msg: action.payload,
      };
    default:
      return state;
  }
}

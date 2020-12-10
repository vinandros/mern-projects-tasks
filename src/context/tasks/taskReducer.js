import {
  PROJECT_TASKS,
  ADD_NEW_TASK,
  TASK_VALIDATION,
  DELETE_TASK,
  ACTIVE_TASK,
  UPDATE_TASK,
  CLEAR_ACTIVE_TASK,
} from "../../types";

export default function reducer(state, action) {
  switch (action.type) {
    case PROJECT_TASKS:
      return {
        ...state,
        projectTasks: action.payload,
      };
    case ADD_NEW_TASK:
      return {
        ...state,
        projectTasks: [action.payload, ...state.projectTasks],
        taskError: false,
      };
    case TASK_VALIDATION:
      return {
        ...state,
        taskError: true,
      };
    case DELETE_TASK:
      return {
        ...state,
        projectTasks: state.projectTasks.filter(
          (task) => task._id !== action.payload
        ),
      };
    case UPDATE_TASK:
      return {
        ...state,
        projectTasks: state.projectTasks.map((task) =>
          task._id === action.payload._id ? action.payload : task
        ),
      };
    case ACTIVE_TASK:
      return {
        ...state,
        activeTask: action.payload,
      };
    case CLEAR_ACTIVE_TASK:
      return {
        ...state,
        activeTask: {},
      };

    default:
      return state;
  }
}

import {
  PROJECT_TASKS,
  ADD_NEW_TASK,
  TASK_VALIDATION,
  DELETE_TASK,
  TASK_STATE,
} from "../../types";

export default function reducer(state, action) {
  switch (action.type) {
    case PROJECT_TASKS:
      return {
        ...state,
        projectTasks: state.tasks.filter(
          (task) => task.projectId === action.payload
        ),
      };
    case ADD_NEW_TASK:
      return {
        ...state,
        tasks: [action.payload, ...state.tasks],
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
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    case TASK_STATE:
      return {
        ...state,
        tasks: state.projectTasks.filter((task) =>
          task.id === action.payload.id ? action.payload : task
        ),
      };
    default:
      return state;
  }
}

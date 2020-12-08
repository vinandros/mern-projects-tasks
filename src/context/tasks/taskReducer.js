import {
  PROJECT_TASKS,
  ADD_NEW_TASK,
  TASK_VALIDATION,
  DELETE_TASK,
  TASK_STATE,
  ACTIVE_TASK,
  UPDATE_TASK,
  CLEAR_ACTIVE_TASK,
} from "../../types";

export default function reducer(state, action) {
  switch (action.type) {
    case PROJECT_TASKS:
      // console.log(state);
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
    case UPDATE_TASK:
    case TASK_STATE:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id ? action.payload : task
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

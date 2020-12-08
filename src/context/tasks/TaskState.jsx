import React from "react";
import TaskContext from "./taskContext";
import TaskReducer from "./taskReducer";
import {
  PROJECT_TASKS,
  ADD_NEW_TASK,
  TASK_VALIDATION,
  DELETE_TASK,
} from "../../types";

const TaskState = (prop) => {
  const initialState = {
    tasks: [
      {
        taskName: "choose framework",
        taskState: true,
        projectId: 1,
        id: 1,
      },
      {
        taskName: "choose hosting",
        taskState: true,
        projectId: 2,
        id: 2,
      },
      {
        taskName: "choose pay library",
        taskState: false,
        projectId: 3,
        id: 3,
      },
      {
        taskName: "choose framework",
        taskState: true,
        projectId: 2,
        id: 4,
      },
      {
        taskName: "choose hosting",
        taskState: true,
        projectId: 3,
        id: 5,
      },
      {
        taskName: "choose pay library",
        taskState: false,
        projectId: 1,
        id: 6,
      },
    ],
    projectTasks: [],
    taskError: false,
  };

  const [state, dispatch] = React.useReducer(TaskReducer, initialState);

  const getProjectsTaks = (projectId) => {
    dispatch({
      type: PROJECT_TASKS,
      payload: projectId,
    });
  };

  const addNewTask = (taskData) => {
    dispatch({
      type: ADD_NEW_TASK,
      payload: taskData,
    });
  };

  const taskValidation = () => {
    dispatch({
      type: TASK_VALIDATION,
    });
  };

  const deleteTask = (taskId) => {
    dispatch({
      type: DELETE_TASK,
      payload: taskId,
    });
  };

  return (
    <TaskContext.Provider
      value={{
        projectTasks: state.projectTasks,
        taskError: state.taskError,
        getProjectsTaks,
        addNewTask,
        taskValidation,
        deleteTask,
      }}
    >
      {prop.children}
    </TaskContext.Provider>
  );
};

export default TaskState;

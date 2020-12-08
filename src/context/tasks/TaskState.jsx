import React from "react";
import { v4 } from "uuid";
import TaskContext from "./taskContext";
import TaskReducer from "./taskReducer";
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
    activeTask: {},
  };

  const [state, dispatch] = React.useReducer(TaskReducer, initialState);

  const getProjectsTaks = (projectId) => {
    dispatch({
      type: PROJECT_TASKS,
      payload: projectId,
    });
  };

  const addNewTask = (taskData) => {
    taskData.id = v4();
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

  const changeTaskState = (task) => {
    dispatch({
      type: TASK_STATE,
      payload: task,
    });
  };

  const setActiveTask = (task) => {
    dispatch({
      type: ACTIVE_TASK,
      payload: task,
    });
  };

  const updateTask = (task) => {
    dispatch({
      type: UPDATE_TASK,
      payload: task,
    });
  };

  const clearActiveTask = () => {
    dispatch({
      type: CLEAR_ACTIVE_TASK,
    });
  };

  return (
    <TaskContext.Provider
      value={{
        projectTasks: state.projectTasks,
        taskError: state.taskError,
        activeTask: state.activeTask,
        getProjectsTaks,
        addNewTask,
        taskValidation,
        deleteTask,
        changeTaskState,
        setActiveTask,
        updateTask,
        clearActiveTask,
      }}
    >
      {prop.children}
    </TaskContext.Provider>
  );
};

export default TaskState;

import React from "react";
import TaskContext from "./taskContext";
import TaskReducer from "./taskReducer";
import axiosClient from "../../config/axios";
import {
  PROJECT_TASKS,
  ADD_NEW_TASK,
  TASK_VALIDATION,
  DELETE_TASK,
  ACTIVE_TASK,
  UPDATE_TASK,
  CLEAR_ACTIVE_TASK,
} from "../../types";

const TaskState = (prop) => {
  const initialState = {
    projectTasks: [],
    taskError: false,
    activeTask: {},
  };

  const [state, dispatch] = React.useReducer(TaskReducer, initialState);

  const getProjectsTaks = async (projectId) => {
    try {
      const res = await axiosClient.get("/tasks", { params: { projectId } });
      const tasks = res.data.tasks;
      dispatch({
        type: PROJECT_TASKS,
        payload: tasks,
      });
    } catch (error) {}
  };

  const addNewTask = async (taskData) => {
    try {
      const res = await axiosClient.post("/tasks", taskData);
      const task = res.data.task;
      dispatch({
        type: ADD_NEW_TASK,
        payload: task,
      });
    } catch (error) {}
  };

  const taskValidation = () => {
    dispatch({
      type: TASK_VALIDATION,
    });
  };

  const deleteTask = async (taskId, projectId) => {
    try {
      await axiosClient.delete(`/tasks/${taskId}`, { params: { projectId } });
      dispatch({
        type: DELETE_TASK,
        payload: taskId,
      });
    } catch (error) {}
  };

  const setActiveTask = (task) => {
    dispatch({
      type: ACTIVE_TASK,
      payload: task,
    });
  };

  const updateTask = async (task) => {
    try {
      const res = await axiosClient.put(`/tasks/${task._id}`, task);
      const updatedTask = res.data.task;
      dispatch({
        type: UPDATE_TASK,
        payload: updatedTask,
      });
    } catch (error) {}
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

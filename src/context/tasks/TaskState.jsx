import React from "react";
import TaskContext from "./taskContext";
import TaskReducer from "./taskReducer";

const TaskState = (prop) => {
  const initialState = {
    tasks: [
      {
        taskName: "choose framework",
        taskState: true,
        projectId: 1,
      },
      {
        taskName: "choose hosting",
        taskState: true,
        projectId: 2,
      },
      {
        taskName: "choose pay library",
        taskState: false,
        projectId: 3,
      },
      {
        taskName: "choose framework",
        taskState: true,
        projectId: 2,
      },
      {
        taskName: "choose hosting",
        taskState: true,
        projectId: 3,
      },
      {
        taskName: "choose pay library",
        taskState: false,
        projectId: 1,
      },
    ],
  };

  const [state, dispatch] = React.useReducer(TaskReducer, initialState);

  return (
    <TaskContext.Provider value={{ task: state.task }}>
      {prop.children}
    </TaskContext.Provider>
  );
};

export default TaskState;

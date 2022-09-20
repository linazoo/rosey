import React from "react";
import InputDetail from "./InputDetail";
import { AddTask } from "./model";

const EditDetail: React.FC<AddTask> = ({
  addTask,
  setAddTask,
  handleAdd,
  setTaskTitle,
  setTaskDescription,
  setTaskFrequency,
}) => {
  return (
    <InputDetail
      setTaskFrequency={setTaskFrequency}
      setTaskDescription={setTaskDescription}
      setTaskTitle={setTaskTitle}
      addTask={addTask}
      setAddTask={setAddTask}
      handleAdd={handleAdd}
    />
  );
};

export default EditDetail;

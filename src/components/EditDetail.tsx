import React from "react";
import InputDetail from "./InputDetail";
import { AddTask } from "./model";

const EditDetail: React.FC<AddTask> = ({
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
      handleAdd={handleAdd}
    />
  );
};

export default EditDetail;

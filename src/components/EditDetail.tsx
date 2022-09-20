import React from "react";
import InputDetail from "./InputDetail";

interface Props {
  addTask: string;
  setAddTask: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
  setTaskTitle: React.Dispatch<React.SetStateAction<string>>;
  setTaskDescription: React.Dispatch<React.SetStateAction<string>>;
  setTaskFrequency: React.Dispatch<React.SetStateAction<string>>;
}

const EditDetail: React.FC<Props> = ({
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

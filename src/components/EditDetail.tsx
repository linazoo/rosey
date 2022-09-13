import React from "react";
import InputDetail from "./InputDetail";

interface Props {
  addTask: string;
  setAddTask: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const EditDetail: React.FC<Props> = ({ addTask, setAddTask, handleAdd }) => {
  return (
    <InputDetail
      addTask={addTask}
      setAddTask={setAddTask}
      handleAdd={handleAdd}
    />
  );
};

export default EditDetail;

import React from "react";
import InputDetail from "../components/InputDetail";
import { Container } from "@mui/system";
import { AddTask } from "../components/model";

const AddPage: React.FC = () => {
  const [addTask, setAddTask] = React.useState<string>("");
  // const [taskTitle, setTaskTitle] = React.useState<AddTask[]>([]);
  const [taskTitle, setTaskTitle] = React.useState<string>("");
  const [taskDescription, setTaskDescription] = React.useState<string>("");
  const [taskFrequency, setTaskFrequency] = React.useState<string>("");

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    // update global state with the new task
    // you'll have useState's for title, description and frequency
    // you'll wanna use the global state setter (from context) to add this new object to global state
    // the new object you're adding will look like:
    // { title: 'new title', description: 'new description', frequency: 'weekly'}
  };

  console.log({ addTask });
  return (
    <Container maxWidth="md">
      <InputDetail
        setTaskFrequency={setTaskFrequency}
        setTaskDescription={setTaskDescription}
        setTaskTitle={setTaskTitle}
        addTask={addTask}
        setAddTask={setAddTask}
        handleAdd={handleAdd}
      />
    </Container>
  );
};

export default AddPage;

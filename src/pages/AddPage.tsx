import React from "react";
import InputDetail from "../components/InputDetail";
import { Container } from "@mui/system";
import { AddTask } from "../components/model";

const AddPage: React.FC = () => {
  const [addTask, setAddTask] = React.useState<string>("");
  const [addTasks, setAddTasks] = React.useState<AddTask[]>([]);
  const [taskTitle, setTaskTitle] = React.useState<string>("");
  const [taskDescription, setTaskDescription] = React.useState<string>("");
  const [taskFrequency, setTaskFrequency] = React.useState<string>("");

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    // this is giving me a type error, and when I try to update the type it says the title, descr, frequ don't exist hmm

    // @ts-ignore
    // setAddTask({
    //   title: taskTitle,
    //   description: taskDescription,
    //   frequency: taskFrequency,
    // });
  };

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

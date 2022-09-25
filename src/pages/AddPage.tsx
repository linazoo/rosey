import React, { useContext } from "react";
import InputDetail from "../components/InputDetail";
import { Container } from "@mui/system";
import GlobalContext from "../contexts/global";
import { useNavigate } from "react-router-dom";

const AddPage: React.FC = () => {
  const { state, setState } = useContext(GlobalContext);
  const [taskTitle, setTaskTitle] = React.useState<string>("");
  const [taskDescription, setTaskDescription] = React.useState<string>("");
  const [taskFrequency, setTaskFrequency] = React.useState<string>("");
  const navigate = useNavigate();

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    const newTask = {
      title: taskTitle,
      description: taskDescription,
      frequency: taskFrequency,
      id: Date.now(),
    };

    setState({ categories: [...state.categories, newTask] });
    navigate("/");
  };

  return (
    <Container maxWidth="md">
      <InputDetail
        setTaskFrequency={setTaskFrequency}
        setTaskDescription={setTaskDescription}
        setTaskTitle={setTaskTitle}
        handleAdd={handleAdd}
      />
    </Container>
  );
};

export default AddPage;

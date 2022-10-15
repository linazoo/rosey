import React, { useContext } from "react";
import InputDetail from "../components/InputDetail";
import { Container } from "@mui/system";
import GlobalContext from "../contexts/global";
import { useNavigate, useParams } from "react-router-dom";

const NewTodoPage = () => {
  const { state, setState } = useContext(GlobalContext);
  const {categories} = state;

  const [taskTitle, setTaskTitle] = React.useState<string>("");
  const [taskDescription, setTaskDescription] = React.useState<string>("");
  const [taskFrequency, setTaskFrequency] = React.useState<string>("");

  const navigate = useNavigate();

  const {id} = useParams();

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    // @ts-ignore
    const category = categories[id];
    
    const newTask = {
      title: taskTitle,
      description: taskDescription,
      frequency: taskFrequency,
      id: Date.now(),
    };
    category.tasks = [...category.tasks, newTask];
    
    setState({
      ...state,
      categories: {
        ...state.categories,
        // @ts-ignore
        [id]: {
         ...category, 
        }
      },
    });
    navigate(`/item/${id}`);
  };

  // this is the same markup in AddPage where we are adding a category
  // we can probably rename this to be more generic since we use it to maek Tasks and Categories
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

export default NewTodoPage;

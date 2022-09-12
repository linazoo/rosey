import React, { useContext } from "react";
import GlobalContext from "../contexts/global";
import { useParams } from "react-router-dom";
import ListOfItems from "../components/ListOfItems";
import { useNavigate } from "react-router-dom";

const DetailPage = () => {
  const { state } = useContext(GlobalContext);
  const { id } = useParams();
  const { categories } = state;

  let navigate = useNavigate();

  const selectedCategory = categories.find((item) => item.id == id);

  const handleClick = (taskId) => {
    navigate(`/item/${id}/detail/${taskId}`);
  };

  return <ListOfItems onClick={handleClick} items={selectedCategory.tasks} />;
};

export default DetailPage;

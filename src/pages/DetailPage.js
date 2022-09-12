import React, { useContext } from "react";
import GlobalContext from "../contexts/global";
import { useParams } from "react-router-dom";
import ListOfItems from "../components/ListOfItems";

const DetailPage = () => {
  const { state } = useContext(GlobalContext);
  const { id } = useParams();
  const { categories } = state;

  const selectedCategory = categories.find((item) => item.id == id);
  console.log({ selectedCategory });
  return <ListOfItems items={selectedCategory.task} />;
};

export default DetailPage;

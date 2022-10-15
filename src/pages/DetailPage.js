import React, { useContext } from "react";
import GlobalContext from "../contexts/global";
import { useParams } from "react-router-dom";
import ListOfItems from "../components/ListOfItems";
import { useNavigate, Link } from "react-router-dom";
import Button from "../components/Button";
import { Container } from "@mui/system";
import { StyledBox } from "../components/commonStyles";

const DetailPage = () => {
  const { state } = useContext(GlobalContext);
  const { id } = useParams();
  const { categories } = state;
  console.log({categories})
  let navigate = useNavigate();

  const selectedCategory = categories[id];

  const handleClick = (taskId) => {
    navigate(`/item/${id}/detail/${taskId}`);
  };

  return (
    <Container maxWidth="md">
      <StyledBox>
        <ListOfItems onClick={handleClick} items={selectedCategory.tasks} />

        <Button
          //@ts-ignore
          component={Link}
          to="new"
          variant="contained"
          sx={{ width: "100%", mt: "20px" }}
        >
          Add +
        </Button>
      </StyledBox>
    </Container>
  );
};

export default DetailPage;

import React, { useContext } from "react";
import Box from "@mui/material/Box";
import GlobalContext from "../contexts/global";
import { useParams } from "react-router-dom";

import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";

function Types() {
  const { state } = useContext(GlobalContext);
  const { id, taskId } = useParams();
  const { categories } = state;

  const selectedCategory = categories.find((item) => item.id == id);
  const selectedTask = selectedCategory.tasks.find(
    (task) => task.id == task.id
  );

  // console.log({ selectedTask });
  return (
    <>
      <Typography variant="h2" gutterBottom>
        {selectedTask.description}
      </Typography>

      <Typography variant="subtitle2" gutterBottom>
        Everything you need to know about washing clothes
      </Typography>

      <Typography variant="body2" gutterBottom>
        <ul>
          <li>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non
            ipsum dolor.
          </li>
          <li>
            Donec pellentesque accumsan semper. Nam elementum tellus mollis
            ultricies sodales.
          </li>
          <li>
            Praesent et convallis nisl. Nullam fringilla, erat a tempor
            consectetur, justo enim tincidunt sem, in placerat felis odio
            euismod ante.
          </li>
          <li>Sed interdum lacus ultrices fermentum consequat.</li>
          <li>Vivamus a blandit mauris. Proin at imperdiet felis.</li>
        </ul>
      </Typography>
    </>
  );
}

const itemDetail = () => {
  return (
    <Container maxWidth="md">
      <Types />
    </Container>
  );
};

export default itemDetail;

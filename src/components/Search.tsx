import * as React from "react";
import TextField from "@mui/material/TextField";

import Autocomplete from "@mui/material/Autocomplete";

interface Item {
  title: string;
  frequency?: string;
  description: string;
}

interface SearchProps {
  items: Array<Item>;
  width: string;
}

export function Search({ items, width }: SearchProps) {
  return (
    <Autocomplete
      fullWidth
      freeSolo
      id="free-solo-2-demo"
      disableClearable
      options={items.map((option) => option.title)}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Search input"
          InputProps={{
            ...params.InputProps,
            type: "search",
          }}
        />
      )}
    />
  );
}

export default Search;

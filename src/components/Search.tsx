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
  sx: any;
}

export function Search({ items, sx }: SearchProps) {
  return (
    <Autocomplete
      sx={sx}
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

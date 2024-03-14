import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
import { Link } from "@mui/material";

export default function  ControlButtons({onSet,onUpdate}) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        "& > *": {
          m: 1,
        },
      }}
     
      p={5} 
    >
      <ButtonGroup variant="outlined" aria-label="Basic button group">
        <Button onClick={onSet}>ADD</Button>
        
        <Button onClick={onUpdate}>UPDATE</Button>
       
      </ButtonGroup>
    </Box>
  );
}

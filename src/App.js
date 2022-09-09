import { Button } from "@mui/material";
import React from "react";

function App() {
  return (
    <div>
      <Button variant="text">Text</Button>
      <Button variant="contained" color="secondary" size="small">
        Contained
      </Button>
      <Button variant="outlined" disableds>
        Outlined
      </Button>
    </div>
  );
}

export default App;

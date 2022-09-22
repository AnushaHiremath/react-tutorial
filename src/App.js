import React from "react";
import SideBar from "./components/SideBar";
import NewsFeed from "./components/NewsFeed";
import NavBar from "./components/NavBar";
import { Box, Stack } from "@mui/system";
import RightBar from "./components/RightBar";


function App() {
  return (
    <Box>
      <NavBar />
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <SideBar />
        <NewsFeed />
        <RightBar />
      </Stack>
    </Box>
  );
}

export default App;

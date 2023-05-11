import React from "react";
import { Box, Stack } from "@mui/material";
import Header from "./Header";
import Footer from "./Footer";
import Message from "./Message";

function Conversation() {
  return (
    <Stack height={"100%"} maxHeight={"100vh"} width={"auto"}>
      {/* Header */}
      <Header />
      {/* Message */}
      <Box sx={{ width: "100%", flexGrow: 1, overflowY: "scroll" }}>
        <Message menu={true} />
      </Box>
      {/* Footer */}
      <Footer />
    </Stack>
  );
}

export default Conversation;

import { Box, IconButton, Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { CaretLeft } from "phosphor-react";
import React from "react";
import { useDispatch } from "react-redux";
import { UpdateSidebarType } from "../redux/slice/app";
import Message from "./Conversation/Message";

function StarredMessages() {
  const theme = useTheme();
  const dispatch = useDispatch();

  return (
    <Box
      sx={{
        width: 320,
        height: "100vh",
        maxHeight: "100vh",
        backgroundColor: theme.palette.mode === "light" ? "#F8FAFF" : theme.palette.background,
      }}
    >
      <Stack sx={{ height: "100%" }}>
        {/* Title, sub */}
        <Box
          sx={{
            width: "100%",
            boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
            backgroundColor: theme.palette.mode === "light" ? "#F8FAFF" : theme.palette.background,
          }}
        >
          <Stack sx={{ height: "100%", p: 2 }} spacing={3} direction={"row"} alignItems={"center"}>
            <IconButton
              onClick={() => dispatch(UpdateSidebarType("CONTACT"))}
              sx={{ "&:hover": { color: theme.palette.primary.main } }}
            >
              <CaretLeft />
            </IconButton>
            <Typography variant="subtitle2">Stared Messages</Typography>
          </Stack>
        </Box>

        {/* Body */}
        <Stack
          sx={{
            height: "100%",
            position: "relative",
            flexGrow: 1,
            overflowY: "scroll",
            backgroundColor: theme.palette.mode === "light" ? "#F8FAFF" : theme.palette.background,
          }}
          spacing={2}
        >
          <Message />
        </Stack>
      </Stack>
    </Box>
  );
}

export default StarredMessages;

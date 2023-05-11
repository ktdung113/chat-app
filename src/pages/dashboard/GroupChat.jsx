import { Box, Divider, IconButton, Link, Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { MagnifyingGlass, Plus } from "phosphor-react";
import React, { useState } from "react";
import { SimpleBarStyle } from "../../components/Scrollbar";
import { Search, SearchIconWrapper, StyledInputBase } from "../../components/Search";
import { ChatList } from "../../data";
import ChatElement from "../../components/ChatElement";
import CreateGroup from "../../sections/main/CreateGroup";

const GroupChat = () => {
  const theme = useTheme();

  const [openDialog, setOpenDialog] = useState(false);
  const handleCloseDialog = () => {
    setOpenDialog(false);
  };
  return (
    <>
      <Stack direction={"row"} sx={{ width: "100%" }}>
        {/* Left */}
        <Box
          sx={{
            width: 320,
            height: "100vh",
            boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
            background: (theme) => (theme.palette.mode === "light" ? "#F8FAFF" : theme.palette.background),
          }}
        >
          <Stack p={3} spacing={3} sx={{ height: "100%", maxHeight: "100vh" }}>
            <Stack>
              <Typography variant="h5">Groups</Typography>
            </Stack>

            <Stack sx={{ width: "100%" }}>
              <Search>
                <SearchIconWrapper>
                  <MagnifyingGlass color="#709CE6" />
                </SearchIconWrapper>
                <StyledInputBase placeholder="Search..." />
              </Search>
            </Stack>

            <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"}>
              <Typography variant="subtitle2" component={Link}>
                Create New Group
              </Typography>
              <IconButton onClick={() => setOpenDialog(true)}>
                <Plus style={{ color: theme.palette.primary.main }} />
              </IconButton>
            </Stack>
            <Divider />

            <Stack spacing={2} direction={"column"} sx={{ flexGrow: 1, overflowY: "scroll", height: "100%" }}>
              <SimpleBarStyle timeout={500} clickOnTrack={false}>
                <Stack spacing={2}>
                  {/*  */}
                  <Typography variant="subtitle2" sx={{ color: "#676767" }}>
                    Pinned
                  </Typography>

                  {/* Chat List */}
                  {ChatList.filter((el) => el.pinned).map((el) => (
                    <ChatElement {...el} />
                  ))}
                  {/*  */}
                  <Typography variant="subtitle2" sx={{ color: "#676767" }}>
                    All Groups
                  </Typography>

                  {/* Chat List */}
                  {ChatList.filter((el) => !el.pinned).map((el) => (
                    <ChatElement {...el} />
                  ))}
                </Stack>
              </SimpleBarStyle>
            </Stack>
          </Stack>
        </Box>

        {/* Right */}
        {/* TODO => Reuse Conversation Components */}
      </Stack>
      {openDialog && <CreateGroup open={openDialog} handleClose={handleCloseDialog} />}
    </>
  );
};

export default GroupChat;

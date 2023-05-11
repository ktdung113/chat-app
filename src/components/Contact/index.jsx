import {
  Avatar,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  IconButton,
  Slide,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Bell, CaretRight, Phone, Prohibit, Star, Trash, VideoCamera, X } from "phosphor-react";

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { ToggleSidebar, UpdateSidebarType } from "../../redux/slice/app";
import { faker } from "@faker-js/faker";
import AntSwitch from "../AntSwitch";

const truncateText = (string, n) => {
  return string?.length > n ? `${string?.slice(0, n)}...` : string;
};
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const BlockDialog = ({ open, handleClose }) => {
  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle>Block this contact ?</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">
          Are you sure you want to block this Contact ?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleClose}>Yes</Button>
      </DialogActions>
    </Dialog>
  );
};
const DeleteDialog = ({ open, handleClose }) => {
  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle>Delete this chat ?</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">
          Are you sure you want to delete this chat ?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleClose}>Yes</Button>
      </DialogActions>
    </Dialog>
  );
};
function Contact() {
  const theme = useTheme();
  const dispatch = useDispatch();

  const [openBlock, setOpenBlock] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);

  const handleCloseBlock = () => {
    setOpenBlock(false);
  };
  const handleCloseDelete = () => {
    setOpenDelete(false);
  };

  return (
    <Box sx={{ width: "320px", height: "100%", maxHeight: "100vh" }}>
      <Stack sx={{ height: "100%" }}>
        {/* Tile, node exit */}
        <Box
          sx={{
            boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
            width: "100%",
            backgroundColor: theme.palette.mode === "light" ? "#F8FAFF" : theme.palette.background,
          }}
        >
          <Stack
            sx={{ height: "100%", p: 2 }}
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
            spacing={2}
          >
            <Typography variant="subtitle2">Contact Info</Typography>
            <IconButton
              onClick={() => dispatch(ToggleSidebar())}
              sx={{ "&:hover": { color: theme.palette.primary.main } }}
            >
              <X />
            </IconButton>
          </Stack>
        </Box>

        {/* Body */}
        <Stack
          sx={{
            height: "100%",
            position: "relative",
            flexGrow: 1,
            overflowY: "scroll",
          }}
          p={3}
          spacing={2}
        >
          {/* Info other */}
          <Stack alignItems={"center"} direction={"row"} spacing={1}>
            <Avatar src={faker.image.avatar()} alt={faker.name.fullName()} sx={{ height: 64, width: 64 }} />
            <Stack spacing={0.5}>
              <Tooltip title={faker.name.fullName()} placement="right">
                <Typography variant="article" fontWeight={600}>
                  {truncateText(faker.name.fullName(), 20)}
                </Typography>
              </Tooltip>
              <Tooltip title="Phone number" placement="right">
                <Typography variant="body2" fontWeight={500}>
                  {"0905639434"}
                </Typography>
              </Tooltip>
            </Stack>
          </Stack>

          {/* Menu videoCall, call */}
          <Stack direction={"row"} alignItems={"center"} justifyContent={"space-evenly"}>
            <Stack spacing={0.5} alignItems={"center"}>
              <IconButton>
                <Phone />
              </IconButton>
              <Typography variant="overline">Voice</Typography>
            </Stack>

            <Stack spacing={1} alignItems={"center"}>
              <IconButton>
                <VideoCamera />
              </IconButton>
              <Typography variant="overline">Video</Typography>
            </Stack>
          </Stack>

          <Divider />
          {/* About, Bio */}
          <Stack spacing={0.5}>
            <Typography variant="article">About</Typography>
            <Typography variant="body2">Lorem, ipsum dolor sit amet consectetur ad</Typography>
          </Stack>

          <Divider />
          {/* Media, links, docs */}
          <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"}>
            <Typography variant="subtitle2">Media, Links & Docs</Typography>

            <Button onClick={() => dispatch(UpdateSidebarType("SHARED"))} endIcon={<CaretRight />}>
              108
            </Button>
          </Stack>
          {/* Media, links, docs */}
          <Stack direction={"row"} spacing={2} alignItems={"center"}>
            {[1, 2, 3].map((el) => (
              <Box>
                <img src={faker.image.food()} alt={faker.name.fullName()} />
              </Box>
            ))}
          </Stack>

          {/* Started  */}
          <Divider />
          <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"}>
            <Stack direction={"row"} spacing={2} alignItems={"center"}>
              <Star size={21} />
              <Typography variant="subtitle2">Started Messages</Typography>
            </Stack>
            <IconButton
              sx={{ "&:hover": { color: theme.palette.primary.main } }}
              onClick={() => dispatch(UpdateSidebarType("STARRED"))}
            >
              <CaretRight />
            </IconButton>
          </Stack>

          {/* Mute notification  */}
          <Divider />
          <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"}>
            <Stack direction={"row"} spacing={2} alignItems={"center"}>
              <Bell size={21} />
              <Typography variant="subtitle2">Mute Notification</Typography>
            </Stack>
            <IconButton>
              <AntSwitch />
            </IconButton>
          </Stack>
          {/* Group member */}
          <Divider />
          <Typography>1 group in common</Typography>
          <Stack direction={"row"} alignItems={"center"} spacing={3}>
            <Avatar src={faker.image.avatar()} alt={faker.name.fullName()} />
            <Stack spacing={0.5}>
              <Typography variant="subtitle2">Won won</Typography>
              <Typography variant="caption">Owl, Parrot, Rabbit, You</Typography>
            </Stack>
          </Stack>

          {/* Block, Delete */}
          <Stack direction={"row"} alignItems={"center"} spacing={2}>
            <Button onClick={() => setOpenBlock(true)} fullWidth variant="outlined" startIcon={<Prohibit />}>
              Block
            </Button>
            <Button onClick={() => setOpenDelete(true)} fullWidth variant="outlined" startIcon={<Trash />}>
              Delete
            </Button>
          </Stack>
        </Stack>
      </Stack>
      {openBlock && <BlockDialog open={openBlock} handleClose={handleCloseBlock} />}
      {openDelete && <DeleteDialog open={openDelete} handleClose={handleCloseDelete} />}
    </Box>
  );
}

export default Contact;

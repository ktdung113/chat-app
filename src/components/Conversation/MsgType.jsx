import { Box, Divider, IconButton, Link, Menu, MenuItem, Stack, Typography } from "@mui/material";
import { alpha, useTheme } from "@mui/material/styles";
import { DotsThreeVertical, DownloadSimple, Image } from "phosphor-react";
import React, { useState } from "react";
import { Message_options } from "../../data";

const Timeline = ({ el }) => {
  const theme = useTheme();
  return (
    <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"}>
      <Divider width="46%" />
      <Typography variant="caption" sx={{ color: theme.palette.text }}>
        {el.text}
      </Typography>
      <Divider width="46%" />
    </Stack>
  );
};

const TextMsg = ({ el, menu }) => {
  const theme = useTheme();
  return (
    <Stack direction={"row"} justifyContent={el.incoming ? "start" : "end"}>
      <Box
        p={1.5}
        sx={{
          backgroundColor: el.incoming ? theme.palette.background.default : theme.palette.primary.main,
          borderRadius: 1.5,
          width: "max-content",
          maxWidth: "70%",
        }}
        borderLeft={el.incoming ? 2 : 0}
        borderRight={!el.incoming ? 2 : 0}
      >
        <Typography variant="body2" color={el.incoming ? theme.palette.text : "#FFF"}>
          {el.message}
        </Typography>
      </Box>
      {menu && <MessageOption />}
    </Stack>
  );
};

const MediaMsg = ({ el, menu }) => {
  const theme = useTheme();
  return (
    <Stack direction={"row"} justifyContent={el.incoming ? "start" : "end"}>
      <Box
        p={1.5}
        sx={{
          backgroundColor: el.incoming ? theme.palette.background.default : theme.palette.primary.main,
          borderRadius: 1.5,
          width: "max-content",
          maxWidth: "70%",
        }}
        borderLeft={el.incoming ? 2 : 0}
        borderRight={!el.incoming ? 2 : 0}
      >
        <Stack spacing={1}>
          <img src={el.img} alt={el.message} style={{ maxHeight: 210, borderRadius: "10px" }} />

          <Typography variant="body2" color={el.incoming ? theme.palette.text : "#fff"}>
            {el.message}
          </Typography>
        </Stack>
      </Box>
      {menu && <MessageOption />}
    </Stack>
  );
};

const ReplyMsg = ({ el, menu }) => {
  const theme = useTheme();
  return (
    <Stack direction="row" justifyContent={el.incoming ? "start" : "end"}>
      <Box
        p={1.5}
        sx={{
          backgroundColor: el.incoming ? theme.palette.background.paper : theme.palette.primary.main,
          borderRadius: 1.5,
          width: "max-content",
          maxWidth: "70%",
        }}
        borderLeft={el.incoming ? 2 : 0}
        borderRight={!el.incoming ? 2 : 0}
      >
        <Stack spacing={2}>
          <Stack
            p={2}
            direction="column"
            spacing={3}
            alignItems="center"
            sx={{
              backgroundColor: theme.palette.background.paper,
              borderRadius: 1,
            }}
          >
            <Typography variant="body2" color={theme.palette.text}>
              {el.message}
            </Typography>
          </Stack>

          <Typography variant="body2" color={el.incoming ? theme.palette.text : "#fff"}>
            {el.reply}
          </Typography>
        </Stack>
      </Box>
      {menu && <MessageOption />}
    </Stack>
  );
};

const LinkMsg = ({ el, menu }) => {
  const theme = useTheme();
  return (
    <Stack direction="row" justifyContent={el.incoming ? "start" : "end"}>
      <Box
        p={1.5}
        sx={{
          backgroundColor: el.incoming ? theme.palette.background.default : theme.palette.primary.main,
          borderRadius: 1.5,
          width: "max-content",
          maxWidth: "70%",
        }}
        borderLeft={el.incoming ? 2 : 0}
        borderRight={!el.incoming ? 2 : 0}
      >
        <Stack>
          <Stack
            // p={2}
            spacing={3}
            // direction="column"
            alignItems="start"
            // sx={{ backgroundColor: theme.palette.background.paper, borderRadius: 1 }}
          >
            <img src={el.preview} alt={el.message} style={{ maxHeight: 210, borderRadius: "10px" }} />

            <Stack spacing={2}>
              <Typography variant="subtitle2">Link msg</Typography>
              <Typography
                variant="subtitle2"
                component={Link}
                sx={{ color: theme.palette.primary.main }}
                to="//https://www.youtube.com"
              >
                www.youtube.com
              </Typography>
            </Stack>

            <Typography variant="body2" color={el.incoming ? theme.palette.text : "#fff"}>
              {el.message}
            </Typography>
          </Stack>
        </Stack>
      </Box>
      {menu && <MessageOption />}
    </Stack>
  );
};

const DocMsg = ({ el, menu }) => {
  const theme = useTheme();
  return (
    <Stack direction="row" justifyContent={el.incoming ? "start" : "end"}>
      <Box
        p={1.5}
        sx={{
          backgroundColor: el.incoming ? alpha(theme.palette.background.default, 1) : theme.palette.primary.main,
          borderRadius: 1.5,
          width: "max-content",
          maxWidth: "70%",
        }}
        borderLeft={el.incoming ? 2 : 0}
        borderRight={!el.incoming ? 2 : 0}
      >
        <Stack spacing={2}>
          <Stack
            // p={2}
            direction="row"
            spacing={3}
            alignItems="center"
            sx={{
              backgroundColor: theme.palette.background.paper,
              borderRadius: 1,
            }}
          >
            <Image size={48} />
            <Typography variant="caption">Abstract.png</Typography>
            <IconButton>
              <DownloadSimple />
            </IconButton>
          </Stack>
          <Typography variant="body2" color={el.incoming ? theme.palette.text : "#fff"}>
            {el.message}
          </Typography>
        </Stack>
      </Box>
      {menu && <MessageOption />}
    </Stack>
  );
};

const MessageOption = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <DotsThreeVertical
        size={20}
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        className="vertical"
        // sx={{ "&:hover": { backgroundColor: "#ddd" } }}
        // style={{ cursor: "pointer", borderRadius: "4px", "&:hover": { backgroundColor: "#ddd" } }}
      />
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <Stack spacing={1} px={1}>
          {Message_options.map((el) => (
            <MenuItem onClick={handleClose}>{el.title}</MenuItem>
          ))}
        </Stack>
      </Menu>
    </>
  );
};
export { MediaMsg, TextMsg, Timeline, DocMsg, LinkMsg, ReplyMsg };

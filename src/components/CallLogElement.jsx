import { Avatar, Box, IconButton, Stack, Typography } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import { ArrowDownLeft, ArrowUpRight, Phone, VideoCamera } from "phosphor-react";
import React from "react";
import StyledBadge from "./settings/StyledBadge";
import { faker } from "@faker-js/faker";

const StyledChatBox = styled(Box)(({ theme }) => ({ "&:hover": { cursor: "pointer" } }));

const CallElement = ({ id, img, name, online, incoming, missed }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: "100%",
        borderRadius: 1,
        backgroundColor: theme.palette.mode === "light" ? "#fff" : theme.palette.background.paper,
      }}
      p={2}
    >
      <Stack direction="row" alignItems={"center"} justifyContent="space-between">
        <Stack direction={"row"} spacing={1}>
          {online ? (
            <StyledBadge overlap="circular" anchorOrigin={{ vertical: "bottom", horizontal: "right" }} variant="dot">
              <Avatar alt={faker.name.fullName()} src={faker.image.avatar()} />
            </StyledBadge>
          ) : (
            <Avatar alt={faker.name.fullName()} src={faker.image.avatar()} />
          )}

          <Stack spacing={0.3} alignItems="center" direction={"row"}>
            <Typography variant="subtitle2">{faker.name.fullName()}</Typography>
          </Stack>
        </Stack>

        {/* VideoCamera, Phone */}
        <Stack direction={"row"} spacing={2} alignItems={"center"}>
          <IconButton>
            <Phone color={"green"} />
          </IconButton>

          <IconButton>
            <VideoCamera color={"green"} />
          </IconButton>
        </Stack>
      </Stack>
    </Box>
  );
};

const CallLogElement = ({ id, img, name, online, incoming, missed }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: "100%",
        borderRadius: 1,
        backgroundColor: theme.palette.mode === "light" ? "#fff" : theme.palette.background.paper,
      }}
      p={2}
    >
      <Stack direction="row" alignItems={"center"} justifyContent="space-between">
        <Stack direction={"row"} spacing={1}>
          {online ? (
            <StyledBadge overlap="circular" anchorOrigin={{ vertical: "bottom", horizontal: "right" }} variant="dot">
              <Avatar alt={name} src={img} />
            </StyledBadge>
          ) : (
            <Avatar alt={name} src={img} />
          )}

          <Stack spacing={0.3}>
            <Typography variant="subtitle2">{name}</Typography>
            <Stack spacing={1} alignItems="center" direction={"row"}>
              {incoming ? (
                <ArrowDownLeft color={missed ? "red" : "green"} />
              ) : (
                <ArrowUpRight color={missed ? "red" : "green"} />
              )}
              <Typography variant="caption">Yesterday 21:24</Typography>
            </Stack>
          </Stack>
        </Stack>

        {/* VideoCamera, Phone */}
        <Stack direction={"row"} spacing={2} alignItems={"center"}>
          <IconButton>
            <Phone color={"green"} />
          </IconButton>

          {/* <Phone color={"green"} />
          <VideoCamera color={"green"} /> */}

          {/* <IconButton>
            <VideoCamera color={"green"} />
          </IconButton> */}
        </Stack>
      </Stack>
    </Box>
  );
};

export { CallElement, CallLogElement };

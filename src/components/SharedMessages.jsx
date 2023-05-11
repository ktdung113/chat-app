import { Box, Grid, IconButton, Stack, Tab, Tabs, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { CaretLeft } from "phosphor-react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { faker } from "@faker-js/faker";
import { UpdateSidebarType } from "../redux/slice/app";
import { DocMsg, LinkMsg } from "./Conversation/MsgType";
import { SHARED_DOCS, SHARED_LINKS } from "../data/index";

function Medias() {
  const theme = useTheme();
  const dispatch = useDispatch();

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
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
        {/* Title */}
        <Box
          sx={{
            boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
            width: "100%",
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
            <Typography variant="subtitle2">Shared Messages</Typography>
          </Stack>
        </Box>
        <Tabs sx={{ px: 2, pt: 2 }} value={value} onChange={handleChange} centered>
          <Tab label="Media" />
          <Tab label="Links" />
          <Tab label="Docs" />
        </Tabs>

        {/* Body */}
        <Stack
          sx={{ height: "100%", position: "relative", flexGrow: 1, overflowY: "scroll" }}
          p={3}
          spacing={value === 1 ? 2 : 3}
        >
          {(() => {
            switch (value) {
              case 0:
                // Image (Medias)
                return (
                  <Grid container spacing={2}>
                    {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18].map((el) => (
                      <Grid item xs={4}>
                        <img src={faker.image.animals()} alt={faker.name.fullName()} />
                      </Grid>
                    ))}
                  </Grid>
                );

              case 1:
                // Links
                return SHARED_LINKS.map((el) => <LinkMsg el={el} />);
              case 2:
                // Docs
                return SHARED_DOCS.map((el) => <DocMsg el={el} />);
              default:
                break;
            }
          })()}
        </Stack>
      </Stack>
    </Box>
  );
}

export default Medias;

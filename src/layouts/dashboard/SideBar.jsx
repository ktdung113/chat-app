import { faker } from "@faker-js/faker";
import { Avatar, Box, Divider, IconButton, Menu, MenuItem, Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Gear } from "phosphor-react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/Images/logo.ico";
import AntSwitch from "../../components/AntSwitch";
import { Nav_Buttons, Profile_Menu } from "../../data";
import useSettings from "../../hooks/useSettings";
import { LogoutUser } from "../../redux/slice/auth";

const getPathMenu = (index) => {
  switch (index) {
    case 0:
      return "/app";
    case 1:
      return "/group";
    case 2:
      return "/call";
    case 3:
      return "/settings";
    default:
      break;
  }
};

const getPathProfile = (index) => {
  switch (index) {
    case 0:
      return "/profile";
    case 1:
      return "/settings";
    // case 2:
    //   return "/auth/login";
    default:
      break;
  }
};

function SideBar() {
  const theme = useTheme();
  const [selected, setSelected] = useState(0);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { onToggleMode } = useSettings();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box
      p={2}
      sx={{
        boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
        height: "100vh",
        width: "100px",
        backgroundColor: theme.palette.mode === "light" ? "#F0F4FA" : theme.palette.background.paper,
      }}
    >
      <Stack spacing={3} alignItems={"center"} justifyContent={"space-between"} sx={{ height: "100%" }}>
        <Stack alignItems={"center"} spacing={4}>
          <Box sx={{ backgroundColor: theme.palette.primary.main, height: "64px", width: "64px", borderRadius: 1.5 }}>
            <img src={Logo} alt="Logo" />
          </Box>

          <Stack spacing={2} sx={{ width: "max-content", direction: "column", alignItems: "center" }}>
            {Nav_Buttons.map((el) =>
              el.index === selected ? (
                <Box key={el.index} sx={{ backgroundColor: theme.palette.primary.main, borderRadius: 1.5 }}>
                  <IconButton sx={{ width: "max-content", color: "#fff" }} key={el.index}>
                    {el.icon}
                  </IconButton>
                </Box>
              ) : (
                <IconButton
                  onClick={() => {
                    setSelected(el.index);
                    navigate(getPathMenu(el.index));
                  }}
                  key={el.index}
                  sx={{
                    width: "max-content",
                    color: theme.palette.mode === "light" ? "#000" : theme.palette.text.primary,
                  }}
                >
                  {el.icon}
                </IconButton>
              )
            )}

            <Divider width={48} />
            {selected === 3 ? (
              <Box sx={{ backgroundColor: theme.palette.primary.main, borderRadius: 1.5 }}>
                <IconButton sx={{ width: "max-content", color: "#fff" }}>
                  <Gear />
                </IconButton>
              </Box>
            ) : (
              <IconButton
                onClick={() => {
                  navigate(getPathMenu(3));
                  setSelected(3);
                }}
                sx={{
                  width: "max-content",
                  color: theme.palette.mode === "light" ? "#000" : theme.palette.text.primary,
                }}
              >
                <Gear />
              </IconButton>
            )}
          </Stack>
        </Stack>

        <Stack spacing={4}>
          {/* Switch */}
          <AntSwitch defaultChecked={theme.palette.mode === "dark"} onChange={onToggleMode} />

          <Avatar
            sx={{ cursor: "pointer" }}
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            src={faker.image.avatar()}
            alt="avatar"
          />
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{ "aria-labelledby": "basic-button" }}
            transformOrigin={{ vertical: "bottom", horizontal: "left" }}
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          >
            <Stack spacing={1} px={1}>
              {Profile_Menu.map((el, ind) => (
                <MenuItem onClick={handleClick}>
                  <Stack
                    onClick={() => {
                      if (ind === 2) {
                        dispatch(LogoutUser());
                      } else {
                        navigate(getPathProfile(ind));
                      }
                    }}
                    sx={{ width: 100 }}
                    direction={"row"}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                  >
                    <span>{el.title}</span>
                    {el.icon}
                  </Stack>
                </MenuItem>
              ))}
            </Stack>
          </Menu>
        </Stack>
      </Stack>
    </Box>
  );
}

export default SideBar;

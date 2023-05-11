import { Dialog, DialogContent, DialogTitle, Divider, Slide, Stack } from "@mui/material";
import { MagnifyingGlass } from "phosphor-react";
import React from "react";
import { CallElement } from "../../components/CallLogElement";
import { Search, SearchIconWrapper, StyledInputBase } from "../../components/Search";
import { MembersList } from "../../data";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const StartCall = ({ open, handleClose }) => {
  return (
    <Dialog
      fullWidth
      maxWidth="xs"
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
      sx={{ p: 4 }}
    >
      <DialogTitle>Start New Call</DialogTitle>

      {/* Form search */}
      <Stack p={2} sx={{ width: "100%" }}>
        <Search>
          <SearchIconWrapper>
            <MagnifyingGlass color="#709CE6" />
          </SearchIconWrapper>
          <StyledInputBase placeholder="Search..." />
        </Search>
      </Stack>

      <DialogContent>
        <Stack sx={{ height: "100%" }}>
          <Stack spacing={1.5}>
            {/* Call List */}
            {MembersList.map((el) => (
              <>
                <CallElement {...el} />
                <Divider />
              </>
            ))}
          </Stack>
        </Stack>
      </DialogContent>
    </Dialog>
  );
};

export default StartCall;

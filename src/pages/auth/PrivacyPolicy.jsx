import { IconButton, Stack, Typography } from "@mui/material";
import { CaretLeft } from "phosphor-react";
import React from "react";
import { Link as RouterLink } from "react-router-dom";

function PrivacyPolicy() {
  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      <Stack direction={"row"} alignItems={"center"}>
        <IconButton to="/auth/register" component={RouterLink}>
          <CaretLeft />
        </IconButton>
        <Typography variant="h4">Privacy Policy</Typography>
      </Stack>

      <Typography variant="h5">What is the Privacy Policy and what does it cover?</Typography>

      <Typography>
        We at Meta want you to understand what information we collect, and how we use and share it. That's why we
        encourage you to read our Privacy Policy. This helps you use Meta Products in the way that's right for you.
      </Typography>

      <Typography>
        In the Privacy Policy, we explain how we collect, use, share, retain and transfer information. We also let you
        know your rights. Each section of the Policy includes helpful examples and simpler language to make our
        practices easier to understand. We've also added links to resources where you can learn more about the privacy
        topics that interest you.
      </Typography>

      <Typography>
        It's important to us that you know how to control your privacy, so we also show you where you can manage your
        information in the settings of the Meta Products you use. You can to shape your experience.
      </Typography>
      <Typography>Read the full policy below.</Typography>
      <br />
    </Stack>
  );
}

export default PrivacyPolicy;

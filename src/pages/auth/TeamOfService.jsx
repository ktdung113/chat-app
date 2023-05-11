import { IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import { CaretLeft } from "phosphor-react";
import { Link as RouterLink } from "react-router-dom";

function TeamOfService() {
  return (
    <Stack spacing={2} sx={{ mb: 5, position: "relative" }}>
      <Stack direction={"row"} alignItems={"center"}>
        <IconButton to="/auth/register" component={RouterLink}>
          <CaretLeft />
        </IconButton>
        <Typography variant="h4">Terms of Service</Typography>
      </Stack>

      <Typography>
        Meta builds technologies and services that enable people to connect with each other, build communities and grow
        businesses. These Terms govern your use of Facebook, Messenger and the other products, features, apps, services,
        technologies and software that we offer (the Meta Products or Products), except where we expressly state that
        separate terms (and not these) apply. These Products are provided to you by Meta Platforms, Inc.
      </Typography>

      <Typography>
        We don't charge you to use Facebook or the other products and services covered by these Terms, unless we state
        otherwise. Instead, businesses, organisations and other persons pay us to show you ads for their products and
        services. By using our Products, you agree that we can show you ads that we think may be relevant to you and
        your interests. We use your personal data to help determine which personalised ads to show you.
      </Typography>
      <Typography>
        We don't sell your personal data to advertisers, and we don't share information that directly identifies you
        (such as your name, email address or other contact information) with advertisers unless you give us specific
        permission. Instead, advertisers can tell us things such as the kind of audience that they want to see their
        ads, and we show those ads to people who may be interested. We provide advertisers with reports about the
        performance of their ads that help them understand how people are interacting with their content. See Section 2
        below to learn more about how personalised advertising under these Terms works on the Meta Products.
      </Typography>
      <br />
    </Stack>
  );
}

export default TeamOfService;

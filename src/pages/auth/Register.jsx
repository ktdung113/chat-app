import { Link, Stack, Typography } from "@mui/material";
import React from "react";
import { Link as LinkRouter } from "react-router-dom";
import RegisterForm from "../../sections/auth/RegisterForm";
import AuthSocial from "../../sections/auth/AuthSocial";

function Register() {
  return (
    <Stack spacing={2} sx={{ mb: 5, position: "relative" }}>
      <Typography variant="h4" textAlign={"center"}>
        Get Started with talk
      </Typography>

      <Stack direction={"row"} spacing={0.5} alignItems={"center"} textAlign={"center"} justifyContent={"center"}>
        <Typography>Already have an account?</Typography>
        <Link variant="subtitle2" component={LinkRouter} to="/auth/login">
          Sign In
        </Link>
      </Stack>

      {/* Register form */}
      <RegisterForm />

      {/* service, policy */}
      <Typography component={"div"} sx={{ color: "text.secondary", mt: 3, typography: "caption", textAlign: "center" }}>
        {"By signing up, I agree to "}
        <Link underline="always" color="text.primary" target="_blank" component={LinkRouter} to="/auth/team_of_service">
          Team of service
        </Link>
        {" and "}
        <Link underline="always" color="text.primary" target="_blank" component={LinkRouter} to="/auth/privacy_policy">
          Privacy Policy
        </Link>
      </Typography>

      <AuthSocial />
    </Stack>
  );
}

export default Register;

import { Stack, Typography, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import React from "react";
import AuthSocial from "../../sections/auth/AuthSocial";
import LoginForm from "../../sections/auth/LoginForm";

function Login() {
  return (
    <Stack spacing={2} sx={{ mb: 5, position: "relative" }}>
      <Typography variant="h4" textAlign={"center"}>
        Login to Talk
      </Typography>
      <Stack direction={"row"} spacing={0.5} alignItems={"center"} textAlign={"center"} justifyContent={"center"}>
        <Typography variant="body2">New User?</Typography>
        <Link to="/auth/register" component={RouterLink}>
          Create an account
        </Link>
      </Stack>
      {/* Login Form */}
      <LoginForm />
      {/* Auth  Social */}
      <AuthSocial />
    </Stack>
  );
}

export default Login;

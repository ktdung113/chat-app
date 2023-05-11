import React, { useState } from "react";
import FormProvider from "../../components/hookForm/FormProvider";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Alert, IconButton, InputAdornment, Stack, Link, Button } from "@mui/material";
import { RHFTextField } from "../../components/hookForm";
import { Eye, EyeSlash } from "phosphor-react";
import { Link as RouterLink } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import { useDispatch } from "react-redux";
import { LoginUser } from "../../redux/slice/auth";

function LoginForm() {
  const theme = useTheme();
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();

  const LoginSchema = yup.object().shape({
    email: yup.string().required("Email is required.").email("Email must be a valid email address."),
    password: yup.string().required("Password is required."),
  });

  const defaultValues = {
    email: "",
    password: "",
  };

  const methods = useForm({
    resolver: yupResolver(LoginSchema),
    defaultValues,
  });

  const {
    reset,
    setError,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = methods;

  const onSubmit = async (data) => {
    try {
      dispatch(LoginUser(data));
    } catch (error) {
      console.log(error);
      reset();
      setError("afterSubmit", {
        ...error,
        message: error.message,
      });
    }
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
        {!!errors.afterSubmit && <Alert severity="error">{errors.afterSubmit.message} </Alert>}
        <RHFTextField name="email" label="Email address" />

        <RHFTextField
          name="password"
          label="Enter password"
          type={showPassword ? "text" : "password"}
          InputProps={{
            endAdornment: (
              <InputAdornment>
                <IconButton onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <Eye /> : <EyeSlash />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Stack>

      <Stack alignItems={"flex-end"} sx={{ my: 2 }}>
        {/* <Stack alignItems={"center"} direction={"row"} justifyContent={"space-evenly"} sx={{ my: 2 }}>
        <Link variant="body2" color="inherit" underline="always" to="/auth/register" component={RouterLink}>
          Register
        </Link> */}
        <Link variant="body2" color="inherit" underline="always" to="/auth/reset_password" component={RouterLink}>
          Forgot Password?
        </Link>
      </Stack>

      {/* Button */}
      <Button
        fullWidth
        color="inherit"
        size="large"
        type="submit"
        variant="contained"
        sx={{
          backgroundColor: "text.primary",
          color: theme.palette.mode === "light" ? "common.white" : "grey.800",
          "&:hover": {
            backgroundColor: "text.primary",
            color: theme.palette.mode === "light" ? "common.white" : "grey.800",
          },
        }}
      >
        Login
      </Button>
    </FormProvider>
  );
}

export default LoginForm;

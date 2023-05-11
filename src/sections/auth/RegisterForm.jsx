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

const RegisterForm = () => {
  const theme = useTheme();
  const [showPassword, setShowPassword] = useState(false);

  const RegisterSchema = yup.object().shape({
    firstName: yup.string().required("First name is required."),
    lastName: yup.string().required("Last name is required."),
    email: yup.string().required("Email is required.").email("Email must be a valid email address."),
    password: yup.string().required("Password is required."),
  });
  const defaultValue = { firstName: "", lastName: "", email: "demo.talk.com", password: "demo1234" };

  const methods = useForm({ resolver: yupResolver(RegisterSchema), defaultValue });

  const {
    reset,
    setError,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = methods;

  const onSubmit = async (data) => {
    try {
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
      <Stack spacing={2}>
        {!!errors.afterSubmit && <Alert severity="error">{errors.afterSubmit.message} </Alert>}

        <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
          <RHFTextField name="firstName" label="First name" />
          <RHFTextField name="lastName" label="Last name" />
        </Stack>
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

        <Stack alignItems={"flex-end"} sx={{}}>
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
          Create a account
        </Button>
      </Stack>
    </FormProvider>
  );
};

export default RegisterForm;

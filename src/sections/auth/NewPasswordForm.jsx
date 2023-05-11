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

const NewPasswordForm = () => {
  const theme = useTheme();
  const [showPassword, setShowPassword] = useState(false);
  const [showCfPassword, setShowCfPassword] = useState(false);

  const NewPasswordSchema = yup.object().shape({
    newPassword: yup.string().min(6, "Password must be at least 6 characters.").required("Password is required."),
    confirmPassword: yup
      .string()
      .required("Password is required.")
      .oneOf([yup.ref("newPassword"), null], "Password must match."),
  });
  const defaultValue = {
    newPassword: "",
    confirmPassword: "",
  };

  const methods = useForm({
    resolver: yupResolver(NewPasswordSchema),
    defaultValue,
  });

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
      <Stack spacing={3}>
        {!!errors.afterSubmit && <Alert severity="error">{errors.afterSubmit.message} </Alert>}

        <RHFTextField
          name="newPassword"
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

        <RHFTextField
          name="confirmPassword"
          label="Confirm password"
          type={showCfPassword ? "text" : "password"}
          InputProps={{
            endAdornment: (
              <InputAdornment>
                <IconButton onClick={() => setShowCfPassword(!showCfPassword)}>
                  {showCfPassword ? <Eye /> : <EyeSlash />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Stack>

      <Stack alignItems={"flex-end"} sx={{ my: 2 }}>
        <Link variant="body2" color="inherit" underline="always" to="/auth/register" component={RouterLink}>
          Register
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
        Submit
      </Button>
    </FormProvider>
  );
};

export default NewPasswordForm;

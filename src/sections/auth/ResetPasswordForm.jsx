import { yupResolver } from "@hookform/resolvers/yup";
import { Alert, Button, Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { RHFTextField } from "../../components/hookForm";
import FormProvider from "../../components/hookForm/FormProvider";

function ResetPasswordForm() {
  const theme = useTheme();

  const ResetPasswordSchema = yup.object().shape({
    email: yup.string().required("Email is required.").email("Email must be a valid email address."),
  });
  const defaultValue = {
    email: "demo.talk.com",
  };

  const methods = useForm({
    resolver: yupResolver(ResetPasswordSchema),
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
      console.log(data);
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
          Send request
        </Button>
      </Stack>
    </FormProvider>
  );
}

export default ResetPasswordForm;

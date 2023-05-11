import { yupResolver } from "@hookform/resolvers/yup";
import { Alert, Button, Stack } from "@mui/material";
import React, { useCallback } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { RHFTextField } from "../../components/hookForm";
import FormProvider from "../../components/hookForm/FormProvider";

function ProfileForm() {
  const ProfileSchema = yup.object().shape({
    name: yup.string().required("Name is required."),
    about: yup.string().required("About is required."),
    avatarUrl: yup.string().required("Avatar is required.").nullable(true),
  });

  const defaultValues = {
    name: "",
    about: "",
    // avatarUrl: ""
  };

  const methods = useForm({
    resolver: yupResolver(ProfileSchema),
    defaultValues,
  });

  const {
    reset,
    watch,
    control,
    setValue,
    setError,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = methods;

  const values = watch();

  const handleDrop = useCallback(
    (acceptedFiles) => {
      const file = acceptedFiles[0];
      const newFile = Object.assign(file, {
        preview: URL.createObjectURL(file),
      });

      if (file) {
        setValue("avatarUrl", newFile, { shouldValidate: true });
      }
    },
    [setValue]
  );

  const onSubmit = async (data) => {
    try {
      console.log("data", data);
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
        <Stack spacing={3}>
          {!!errors.afterSubmit && <Alert severity="error">{errors.afterSubmit.message} </Alert>}
          <RHFTextField name="name" label="Full name" helperText={"This name is visible to your contacts."} />
          <RHFTextField multiline rows={3} maxRows={5} name="about" label="About" />
        </Stack>

        <Stack direction={"row"} justifyContent={"end"}>
          <Button color="primary" size="large" type="submit" variant="outlined">
            Save
          </Button>
        </Stack>
      </Stack>
    </FormProvider>
  );
}

export default ProfileForm;

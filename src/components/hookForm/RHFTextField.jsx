import PropTypes from "prop-types";

//form
import { Controller, useFormContext } from "react-hook-form";
//Mui
import { TextField } from "@mui/material";

import React from "react";

RHFTextField.propTypes = {
  name: PropTypes.string,
  helperText: PropTypes.node,
};

export default function RHFTextField({ name, helperText, ...other }) {
  const { control } = useFormContext;
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          fullWidth
          error={!!error}
          value={typeof field.value === "number" && field.value === 0 ? "" : field.value}
          helperText={error ? error.message : helperText}
          {...other}
        />
      )}
    />
  );
}

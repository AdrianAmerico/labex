import React from "react";
import { TextField } from "@material-ui/core";
import { useStyles } from "./styles.js";

function TextInput(
  { label, placeholder, value, type, name, onChange, pattern },
  props
) {
  const styles = useStyles();
  return (
    <TextField
      label={label}
      variant="outlined"
      placeholder={placeholder}
      value={value}
      type={type}
      name={name}
      color="primary"
      onChange={onChange}
      pattern={pattern}
      InputLabelProps={{
        style: { color: "#fff" },
      }}
      {...props}
      className={styles.root}
      required
    />
  );
}

export default TextInput;

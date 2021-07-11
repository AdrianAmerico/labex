import React from 'react';
import { TextField } from '@material-ui/core';



function TextInput({ label, placeholder, value, type, name, onChange, pattern }) {

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
                style: { color: '#fff' },
            }}
            style={{ margin: "5px 0" }}
            required
        />
    )
};

export default TextInput;
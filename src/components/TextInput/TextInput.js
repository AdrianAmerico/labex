import React from 'react';
import TextField from '@material-ui/core/TextField';

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
            required
        />
    )
};

export default TextInput;
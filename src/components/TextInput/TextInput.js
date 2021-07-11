import React from 'react';
import TextField from '@material-ui/core/TextField';
import { createMuiTheme } from "@material-ui/core/styles";



function TextInput({ label, placeholder, value, type, name, onChange, pattern }) {

    const styles = {
        'input': {
            '&::placeholder': {
                color: 'blue'
            }
        }
    };

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
            // InputProps={{ classes: { input: styles[0] } }}
            required
        />
    )
};

export default TextInput;
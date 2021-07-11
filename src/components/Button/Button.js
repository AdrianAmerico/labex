import React from 'react';
import { Button } from '@material-ui/core';

function DefaultButton(props) {
    console.log(props)
    return (<Button
        variant="outlined"
        color="primary"
        onClick={props.function}
        style={{ color: "#f2f4f5" }}
        size="large"
        type={props.type}
    >{props.children}
    </Button>)
}

export default DefaultButton;
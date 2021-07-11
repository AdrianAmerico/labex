
import React, { useState } from 'react';
import globalContext from './GlobalStateContext';

function GlobalState(props) {
    const [planetKey, setPlanetKey] = useState("")
    return (
        <globalContext.Provider value={{ planetKey, setPlanetKey }}>
            {props.children}
        </globalContext.Provider>
    )
}
export default GlobalState;
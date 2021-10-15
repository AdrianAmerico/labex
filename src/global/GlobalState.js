
import React, { useState } from 'react';
import GlobalContext from './GlobalStateContext';

function GlobalState(props) {
    const [planetKey, setPlanetKey] = useState("")
    return (
        <GlobalContext.Provider value={{ planetKey, setPlanetKey }}>
            {props.children}
        </GlobalContext.Provider>
    )
}
export default GlobalState;
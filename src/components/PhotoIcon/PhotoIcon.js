import React from 'react';
import Jupiter from '../../assets/jupiter.png';
import Mars from '../../assets/mars.png';
import Plutao from '../../assets/plutao.png';
import Netuno from '../../assets/netuno.png';

function photoIcon({planet}) {

    console.log(planet)
    switch (planet) {
        case 'Marte':
            return <img src={Mars} alt="" />
        case 'Netuno':
            return <img src={Netuno} alt="" />
        case 'Jupiter':
            return <img src={Jupiter} alt="" />
        default:
            return <img src={Plutao} alt="" />
    }
}

export default photoIcon;
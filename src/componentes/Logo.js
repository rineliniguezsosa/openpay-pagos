import React from 'react'
import Codemidlog from '../imagenes/blue3.png'
import '../App.css'
function Logo() {
    return (
        <picture>
            <img className="logoimg" src={Codemidlog} alt='' />
        </picture>
    )
}

export default Logo

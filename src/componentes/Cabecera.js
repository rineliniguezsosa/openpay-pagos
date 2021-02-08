import React from 'react'
import '../App.css'
import Logo from './Logo'
const intro = "Tarjeta de crédito o débito"

function Cabecera() {
    return (
        <header className="intro">
           <h2>{intro}</h2> 
           <Logo></Logo>
        </header>
    )
}

export default React.memo(Cabecera)


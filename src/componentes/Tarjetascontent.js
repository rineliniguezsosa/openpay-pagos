import React from 'react'
import '../App.css'
import card1 from '../imagenes/cards1.png'
import card2 from '../imagenes/cards2.png'

function Tarjetascontent(props) {
    return (
        <section className="tarjetascontent">
            <h4 id="positioncredito" >{props.credito}</h4>
            <picture className="positionimg">
                <img alt="tarjetas aceptadas" src={card1} />
            </picture>
            <div className="linea"></div>
            <h4 id="positiondebito">{props.debito}</h4>
            <picture className="positionimg">
                <img alt="tarjetas aceptadas" src={card2} />
            </picture>
        </section>
    )
}

export default React.memo(Tarjetascontent)

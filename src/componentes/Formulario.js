import React from 'react'
import '../App.css'
import cvv from '../imagenes/cvv.png'
import openpay from '../imagenes/openpay.png'
import security from '../imagenes/security.png'
import Button from './Button'
function Formulario() {
    return (
        <section className="contentform">
            <form>
                    <label className="words">Nombre del titular</label>
                    <label className="words">Número de tarjeta</label><br></br>

                    <input className="sctn" placeholder="Como aparece en la tarjeta" type="text"></input>
                    <input className="sctn"  type="text"></input><br></br>

                    <label className="words-2">Fecha de expiración</label>
                    <label className="words-2">Código de seguridad</label><br></br>

                    <input className="sctn-2" placeholder="Mes" type="text"></input>
                    <input className="sctn-2" placeholder="Año"  type="text"></input>
                    <input className="sctn-3" placeholder="3 digitos" type="text"></input>
                    <picture> <img src={cvv} alt=""/> </picture>
                    <br></br>
                    <label className="words">Monto a pagar</label><br></br>
                    <input className="sctn-2" placeholder="Cantidad" type="text"></input>
                    <br></br>

                    <span className="words-3">Transacciones realizadas via:</span>
                    <span>Tus pagos se realizan de forma segura con encriptación de 256 bits</span>
                    <br></br>
                    <picture id="posicionpay"><img src={openpay} alt=""/> </picture>
                    <picture id="posicionsecurity"><img src={security} alt=""/></picture>
                    
                    <Button></Button>
                    

            </form>
        </section>
    )
}

export default Formulario

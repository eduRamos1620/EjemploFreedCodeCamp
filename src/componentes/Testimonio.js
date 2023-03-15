import React from "react";

function Testimonio(){
    return(
        <div className='contenedor-testimonio'>
            <img 
                className='imagen-testimonio' 
                src={require('../imagenes/testimonio-atardecer.jpg')}
                alt='Foto atardecer'/>
            <div className='contenedor-texto-testimonio'>
                <p className='nombre-testimonio'>Atardecer</p>
                <p className='nombre-testimonio'>Bonito atardecer</p>
                <p className='texto-testimonio'>aqui va mucho texto</p>
            </div>
        </div>
    );
}

export default Testimonio;
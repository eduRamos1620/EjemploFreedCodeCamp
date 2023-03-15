import React from "react";
import '../componentes/styles/Testimonio.css';

//se crea el contenedor para introducir los testimonios siendo reutilizable
function Testimonio(props){
    return(
        <div className='contenedor-testimonio'>
            <img 
                className='imagen-testimonio' 
                src={require(`../imagenes/testimonio-${props.imagen}.jpg`)}
                alt='Foto atardecer'/>
            <div className='contenedor-texto-testimonio'>
                <p className='nombre-testimonio'><strong>{props.nombre}</strong> en {props.pais}</p>
                <p className='cargo-testimonio'>{props.cargo} {props.empresa}</p>
                <p className='texto-testimonio'>{props.testimonio}</p>
            </div>
        </div>
    );
}

export default Testimonio;
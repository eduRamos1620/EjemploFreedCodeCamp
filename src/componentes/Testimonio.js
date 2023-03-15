import React from "react";
import '../componentes/styles/Testimonio.css';

function Testimonio(){
    return(
        <div className='contenedor-testimonio'>
            <img 
                className='imagen-testimonio' 
                src={require('../imagenes/testimonio-atardecer.jpg')}
                alt='Foto atardecer'/>
            <div className='contenedor-texto-testimonio'>
                <p className='nombre-testimonio'>Atardecer</p>
                <p className='cargo-testimonio'>Bonito atardecer</p>
                <p className='texto-testimonio'>Hoy es un día bonito para amanecer de buenas Para cantarle al amor para olvidar mis penas Para mí eres la reina en esta colmena Me trajo a la cama mi café y un plato de avena Preparo dos clericots y que importa la hora De tanto que me inspiras eres cómo mi editora Yo soy desierto y tu agua en esta cantimplora Mi cora ríe hace rato que no llora</p>
            </div>
        </div>
    );
}

export default Testimonio;
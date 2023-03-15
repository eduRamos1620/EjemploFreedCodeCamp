import './App.css';
import Testimonio from './componentes/Testimonio.js'

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Esto es lo que dicen nuestros al umnos</h1>
        <Testimonio 
          nombre='atardecer'
          pais='mexico'
          imagen='atardecer'
          cargo='bonito'
          empresa='atardecer'
          testimonio='Hoy es un día bonito para amanecer de buenas
          Para cantarle al amor para olvidar mis penas
          Para mí eres la reina en esta colmena
          Me trajo a la cama mi café y un plato de avena
          
          Preparo dos clericots y que importa la hora
          De tanto que me inspiras eres cómo mi editora
          Yo soy desierto y tu agua en esta cantimplora
          Mi cora ríe hace rato que no llora' />

        <Testimonio 
        nombre='luna'
        pais='mexico'
        imagen='luna'
        cargo='anochecer'
        empresa='oscura'
        testimonio='Después de la tormenta siempre esta más tranquilo
        Las palabras duelen cuidado con su filo
        Alguna vez falto comida más nunca el estilo
        No entenderías como me pones se siente tan chilo
        
        Le traje flores le compre un par de vestidos
        No recordaba que escribir de amor fuera tan divertido
        Para mi suerte con mis letras le arranque un suspiro
        Después de eso le escribí cómo diez mil papiros'        
        />

<Testimonio 
        nombre='mike'
        pais='tokio'
        imagen='mike'
        cargo='el invencible'
        empresa='tokio mangi'
        testimonio='Si me siento bien lo tiro a veces cae
        Quiero darte un beso en una toma cenital
        No importa lo que digan yo nunca fui tan real
        Después de agua y aceite tú eres mi limón y sal
        
        Somos tal para cual o así decía mi abuela
        Si la cago dímelo aunque me duela
        La vida me ha golpeado esa fue mi escuela
        Y aunque me haga el duro creo que me dejo secuela'        
        />
      </div>
    </div>
  );
}

export default App;

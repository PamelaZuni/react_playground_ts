interface homeProps{
  titulo: string;
  texto: string;
}


function Home(props: homeProps) { //dentro do home e um objeto
  return (
    <> 
    <div>Componente Home</div>
    <div>
      <h2>{props.titulo}</h2>  
      <p>{props.texto}</p>
    </div>
    </>
  )
}

export default Home
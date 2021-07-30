import React, {useState, useEffect}from 'react'
import styled from '@emotion/styled'
import Frase from './component/Frase';

const Contenedor = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5rem;
  flex-direction: column;
`;

const Boton = styled.button`
  background-size: 300px;
  border: 2px solid black;
  margin-top: 1.5rem;
  padding: 1rem 3rem;
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
  font-size: 2rem;
  background: -webkit-linear-gradient(top left, #007d35 0%, #007d35 40%, #0f574e 100%);

`

function App() {
  const [frase, guardarFrase] = useState({})

  const  consultarApi = async() => {  
    const api = await fetch('https://breakingbadapi.com/api/quote/random')
    const frase = await api.json();
    guardarFrase(frase[0]) 
  }


  useEffect(() => {
    consultarApi()
  }, [])

  return (
    <Contenedor>
      <Frase
        frase={frase}
      />
      <Boton
        onClick={consultarApi}
      >
        Obtener Frase
      </Boton>
    </Contenedor>
  );
}

export default App;

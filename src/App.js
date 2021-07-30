import React from 'react'
import styled from '@emotion/styled'


const Contenedor = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5rem;
  flex-direction: column;
`;

const Boton = styled.button`
  background-size: 300px;
  border: 2px solid black;
  margin-top: 3rem;
  padding: 1rem 3rem;
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
  font-size: 2rem;
  background: -webkit-linear-gradient(top left, #007d35 0%, #007d35 40%, #0f574e 100%);

`

function consultarApi(){
  console.log('consultando api...')
}

function App() {
  return (
    <Contenedor>
      <Boton
        onClick={consultarApi}
      >
        Obtener Frase
      </Boton>
    </Contenedor>
  );
}

export default App;

import { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import ImageCripto from './assets/img/imagen-criptos.png';
import Form from './components/Form';
import Result from './components/Result';

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  width: 90%;

  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;

const Imagen = styled.img`
  max-width: 400px;
  width: 80%;
  margin: 100px auto 0 auto;
  display: block;
`;

const Heading = styled.h1`
  font-family: 'Lato', sans-serif;
  color: white;
  text-align: center;
  font-weight: 700;
  margin-top: 80px;
  margin-bottom: 50px;
  font-size: 34px;

  &:after {
    content: '';
    width: 100px;
    height: 6px;
    background-color: #66a2fe;
    display: block;
    margin: 10px auto 0 auto;
  }
`;

function App() {
  const [currencies, setCurrencies] = useState({});
  const [result, setResult] = useState({});

  useEffect(() => {
    const apiFetch = async () => {
      if (Object.keys(currencies).length > 0) {
        const { currency, cripto } = currencies;
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cripto}&tsyms=${currency}`;

        const response = await fetch(url);
        const result = await response.json();

        setResult(result.DISPLAY[cripto][currency]);
      }
    };

    apiFetch();
  }, [currencies]);

  return (
    <Container>
      <Imagen src={ImageCripto} alt="criptos imagen" />

      <div>
        <Heading>Cotiza criptomonedas al instante</Heading>
        <Form setCurrencies={setCurrencies} />
        {result?.PRICE && <Result result={result} />}
      </div>
    </Container>
  );
}

export default App;

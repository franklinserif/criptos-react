import styled from '@emotion/styled';
import ImageCripto from './assets/img/imagen-criptos.png';

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  width: 90%;
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
`;

function App() {
  return (
    <Container>
      <Imagen src={ImageCripto} alt="criptos image" />
      <Heading>App</Heading>
    </Container>
  );
}

export default App;

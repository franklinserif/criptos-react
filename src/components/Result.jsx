import styled from '@emotion/styled';

const Container = styled.div`
  color: #fff;
  font-family: 'Lato', sans-serif;
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 30px;
`;

const Image = styled.img`
  display: block;
  width: 120px;
`;

const Price = styled.p`
  font-size: 24px;
  span {
    font-weight: 700;
  }
`;
const Text = styled.p`
  font-size: 18px;
  span {
    font-weight: 700;
  }
`;

const Result = ({ result }) => {
  const { PRICE, HIGHTDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } =
    result;
  return (
    <Container>
      <Image src={`https://cryptocompare.com/${IMAGEURL}`} alt="Cripto image" />
      <div>
        <Price>
          El precio es de: <span>{PRICE}</span>
        </Price>
        <Text>
          El precio mas alto del dia: <span>{HIGHTDAY}</span>
        </Text>
        <Text>
          El precio mas bajo del dia: <span>{LOWDAY}</span>
        </Text>
        <Text>
          Variacion ultimas 24 horas: <span>{CHANGEPCT24HOUR}</span>
        </Text>
        <Text>
          Ultima actualizacion: <span>{LASTUPDATE}</span>
        </Text>
      </div>
    </Container>
  );
};

export default Result;

import { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import Error from './Error';
import useSelectCurrency from '../hooks/useSelectCurrency';
import currencies from '../data/data';

const InputSubmit = styled.input`
  background-color: #9497ff;
  border: none;
  width: 100%;
  padding: 10px;
  color: #fff;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 30px;

  &:hover {
    background-color: #7a7dfe;
  }
`;

const Form = () => {
  const [criptos, setCriptos] = useState([]);
  const [error, setError] = useState(false);
  const [currency, SelectCurrency] = useSelectCurrency(
    'Elige tu moneda',
    currencies,
  );
  const [cripto, SelectCriptoCurrency] = useSelectCurrency(
    'Elige tu cripto moneda',
    criptos,
  );
  useEffect(() => {
    const ApiFetch = async () => {
      const url =
        'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';

      try {
        const response = await fetch(url);
        const result = await response.json();
        const arrayCriptos = result.Data.map((cripto) => {
          return {
            id: cripto.CoinInfo.Name,
            name: cripto.CoinInfo.FullName,
          };
        });
        setCriptos(arrayCriptos);
      } catch (error) {}
    };

    ApiFetch();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    if ([currency, criptos].includes('')) {
      setError(true);
      return null;
    }
  };

  return (
    <>
      {error && <Error>Todos los campos son obligatorios</Error>}
      <form>
        <SelectCurrency />
        <SelectCriptoCurrency />
        <InputSubmit type="submit" value="Cotizar" onClick={handleSubmit} />
      </form>
    </>
  );
};

export default Form;

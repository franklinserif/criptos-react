import { useEffect } from 'react';
import styled from '@emotion/styled';
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
  const [currency, SelectCurrency] = useSelectCurrency(
    'Elige tu moneda',
    currencies,
  );

  useEffect(() => {
    const ApiFetch = async () => {
      const url =
        'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';

      const response = await fetch(url);
      const result = await response.json();
      const arrayCriptos = result.data.map((cripto) => {
        return {
          id: cripto.CoinInfo.Name,
          name: cripto.CoinInfo.FullName,
        };
      });
    };

    ApiFetch();
  }, []);

  return (
    <form>
      <SelectCurrency />
      {currency}
      <InputSubmit type="submit" value="Cotizar" />
    </form>
  );
};

export default Form;

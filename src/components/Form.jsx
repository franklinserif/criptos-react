import styled from '@emotion/styled';
import useSelectCurrency from '../hooks/useSelectCurrency';
import currency from '../data/data';

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
  const [SelectCurrency] = useSelectCurrency('Elige tu moneda', currency);

  return (
    <form>
      <SelectCurrency />
      <InputSubmit type="submit" value="Cotizar" />
    </form>
  );
};

export default Form;

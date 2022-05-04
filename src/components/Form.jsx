import styled from '@emotion/styled';
import useSelectCurrency from '../hooks/useSelectCurrency';

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

  &:hover {
    background-color: #7a7dfe;
  }
`;

const Form = () => {
  const [SelectCurrency] = useSelectCurrency('Elige tu moneda');

  return (
    <form>
      <SelectCurrency />
      <InputSubmit type="submit" value="Cotizar" />
    </form>
  );
};

export default Form;

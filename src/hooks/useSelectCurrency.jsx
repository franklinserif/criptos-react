import styled from '@emotion/styled';

const Label = styled.label`
  color: white;
`;

const useSelectCurrency = (label, options) => {
  const SelectCurrency = () => (
    <>
      <Label htmlFor="">{label}</Label>
      <select name="currency">
        {options.map((option) => (
          <option key={option.id} value={option.id}>
            {option.name}
          </option>
        ))}
      </select>
    </>
  );

  return [SelectCurrency];
};

export default useSelectCurrency;

import styled from '@emotion/styled';

const Label = styled.label`
  color: white;
`;

const useSelectCurrency = (label) => {
  const SelectCurrency = () => (
    <>
      <Label htmlFor="">{label}</Label>
    </>
  );

  return [SelectCurrency];
};

export default useSelectCurrency;

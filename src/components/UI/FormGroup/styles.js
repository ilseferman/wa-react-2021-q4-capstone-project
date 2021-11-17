import styled from 'styled-components';

export const StyledFormGroup = styled.div`
  background: #ffffff;
  display: grid;
  grid-template-columns: 1fr 4fr;
  align-items: center;

  width: 100%;
  margin: 5px auto;

  input,
  textarea {
    height: 2rem;
    border: 1px solid #dfdfdf;
    font-size: 1.1rem;
    padding: 0.6rem 1rem;
    width: 90%;
    margin: 0 1rem;

    &:focus-visible {
      box-shadow: none;
      outline: none;
    }
  }
`;

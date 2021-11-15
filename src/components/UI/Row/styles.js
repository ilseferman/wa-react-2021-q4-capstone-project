import styled from 'styled-components';

export const StyledRow = styled.div`
  background: #ffffff;
  border-bottom: 0.5px solid #e6e6e6;
  padding: 2rem 2rem;
  display: grid;
  grid-template-columns: ${(props) => props.columns};
  align-items: center;
  justify-items: ${(props) => props.justify};
  width: 90%;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    justify-items: center;
  }

  img {
    max-width: 5rem;
  }

  h4 {
    text-align: left;
  }

  h3 {
    margin: 0;
  }

  input {
    height: 2rem;
    border: 1px solid #e6e6e6;
    font-size: 1.1rem;
    padding: 0.6rem 1rem;
    width: 3rem;
    margin: 0 1rem;

    &:focus-visible {
      box-shadow: none;
      outline: none;
    }
  }

  button {
    border: none;
    cursor: pointer;
  }

  .remove {
    color: #ff3333;
    background-color: #ffffff;
  }
`;

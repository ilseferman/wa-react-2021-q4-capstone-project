import styled from 'styled-components';

const columns5 = `repeat(5, 1fr)`;
const columns4 = `repeat(4, 1fr)`;

const StyledWrapper = styled.div`
  display: grid;

  @media (min-width: 1025px) {
    grid-template-columns: ${(props) =>
      props.cols === 5 ? columns5 : columns4};
  }

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export { StyledWrapper };

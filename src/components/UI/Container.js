import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  height: 100vh;
  grid-gap: 0.25rem;
  grid-template-columns: ${(props) => props.columns || '20vw auto'};
  @media (max-width: 768px) {
    grid-template-columns: auto;
  }
`;

const Sidebar = styled.aside`
  grid-column: 1;
  padding: 0 2rem;
`;

const Content = styled.div`
  grid-column: 2;
  padding-bottom: 2rem;
  @media (max-width: 768px) {
    grid-column: 1;
  }
`;

export { Container, Sidebar, Content };

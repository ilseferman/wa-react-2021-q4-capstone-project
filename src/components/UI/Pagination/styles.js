import styled from 'styled-components';

const StyledPagination = styled.div`
  display: flex;
  justify-content: center;
  color: rgba(0, 0, 0, 0.8);
`;

const Arrow = styled.div`
  padding: 9px 16px 0;
  color: #3483fa;
  cursor: pointer;
`;

const CurrentPage = styled.div`
  padding: 10px 20px;
  background-color: rgba(0, 0, 0, 0.04);
`;

const Pages = styled.div`
  padding: 10px 20px 10px 5px;
`;
export { StyledPagination, Arrow, CurrentPage, Pages };

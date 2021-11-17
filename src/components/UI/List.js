import styled from 'styled-components';

export const List = styled.div`
  padding-top: 1rem;
  button {
    border: none;
    display: block;
    font-size: 14px;
    margin: 0 0 9px;
    cursor: pointer;
  }

  .active {
    background-color: #3483fa;
    border-radius: 3px;
    color: #fff;

    line-height: 1.2;
    padding: 4px 8px;
  }
`;

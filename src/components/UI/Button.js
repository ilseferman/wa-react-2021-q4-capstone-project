import styled from 'styled-components';

export const Button = styled.button`
  background-color: #3483fa;
  border-bottom: none;
  border-color: #e6e6e6;
  border-radius: 5px;
  border: 1px solid transparent;
  color: #fff;
  cursor: pointer;
  display: block;
  font-size: ${(props) => (props.small ? '10px' : '12px')};
  height: ${(props) => (props.small ? '1.5rem' : '2.2rem')};
  margin: ${(props) => (props.block ? '0 auto' : '1rem 0')};
  padding: 0rem 1rem;
  text-transform: uppercase;
  width: 98%;

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.2s ease-in-out;
  }
  &:disabled {
    background-color: #cccccc;
    color: #666666;
    &:hover {
      box-shadow: none;
    }
  }
`;

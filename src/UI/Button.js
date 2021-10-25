import styled from 'styled-components';
export const Button = styled.button`
  background-color: #3483fa;
  color: #fff;
  border-bottom: none;
  border-color: #e6e6e6;
  border-radius: 5px 5px 0 0;
  border: 1px solid #eee;
  cursor: pointer;
  display: block;
  font-size: 1rem;
  height: 2.2rem;
  margin: 0 auto;
  padding: 0.5rem 20rem;

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.2s ease-in-out;
  }
`;

import styled from 'styled-components';

const Nav = styled.nav`
  background-color: #fff159;
  box-shadow: 0 2px 8px rgba(109, 104, 117, 0.4);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 3.5rem;
  position: fixed;
  width: 100%;
  z-index: 2;

  form {
    font-size: 1.1rem;
    padding: 0.6rem 1rem;
    width: 70%;
    margin: 0 1rem;
    display: flex;
    justify-content: center;

    input {
      border: none;
      font-size: 1.1rem;
      padding: 0.6rem 1rem;
      float: left;
      width: 90%;
      &:focus-visible {
        box-shadow: none;
        outline: none;
      }
    }

    button {
      background-color: #fff;
      border-left: 1px solid #e6e6e6;
      color: #333;
      float: left;
      width: 1.3rem;
      padding: 10px;
    }
  }

  button {
    all: unset;
    cursor: pointer;
    width: 10%;
  }
`;

const Logo = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  margin-left: 1rem;
  width: 7%;

  @media (max-width: 768px) {
    h3 {
      display: none;
    }
  }
`;

export { Nav, Logo };

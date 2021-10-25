import styled from 'styled-components';

const Nav = styled.nav`
  background-color: #fff159;
  box-shadow: 0 2px 8px rgba(109, 104, 117, 0.4);
  display: flex;
  padding: 1vh 0;
  position: fixed;
  width: 100vw;
  z-index: 2;

  button {
    all: unset;
    cursor: pointer;
    margin: 0 2vw;
  }
`;

const Logo = styled.div`
  align-items: center;
  cursor: pointer;
  display: flex;
  margin: 0 1rem;

  i {
    margin: 0 5px;
  }

  @media (max-width: 768px) {
    h3 {
      display: none;
    }
  }
`;

const NavItems = styled.div`
  align-items: center;
  display: flex;
  justify-content: left;
  margin: 0;
  padding: 0 0 0 2rem;
  width: 90vw;

  input {
    border: none;
    font-size: 1.1rem;
    padding: 0.6rem 1rem;
    width: 70vw;

    &:focus-visible {
      box-shadow: none;
      outline: none;
    }
  }

  @media (max-width: 768px) {
    input {
      width: 55vw;
    }
  }
`;

export { Nav, Logo, NavItems };

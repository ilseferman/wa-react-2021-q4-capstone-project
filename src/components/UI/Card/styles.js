import styled from 'styled-components';

const StyledCard = styled.div`
  color: #212529;
  background-color: #fff;
  margin: 1vw 1vw;
  padding: ${(props) => (props.padding ? props.padding : 0)};
  border-radius: 6px;
  cursor: ${(props) => props.cursor};
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 12%);

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.2s ease-in-out;
  }

  img {
    width: 100%;
  }

  .label-left {
    font-size: 14px;
    line-height: 1.3;
    max-height: 35px;
    padding-right: 20px;
    color: #000;
    font-size: 12px;
    font-weight: 300;
    line-height: 1.17;
    margin: 2px 0 0;
    overflow: hidden;
    text-align: left;
  }

  .label-center {
    cursor: pointer;
    display: block;
    padding: 0.5em 1em;
    font-size: 0.8rem;
    text-align: center;
    text-transform: uppercase;
  }

  .category {
    background-color: #3483fa;
    border-radius: 3px;
    color: #fff;
    display: inline-block;
    font-size: 10px;
    line-height: 1.2;
    padding: 4px 8px;
    text-transform: uppercase;
  }

  .price {
    color: rgba(0, 0, 0, 0.8);
    font-size: 20px;
    line-height: 1;
    font-size: 24px;
  }
  .tags span {
    font-size: 12px;
    padding: 0 5px;
  }

  .description {
    line-height: 20px;
    letter-spacing: 1px;
    padding: 1rem 0;
  }
  .shortDesc {
    font-size: 10px;
    line-height: 1.2;
    padding: 4px 0px;
    
  }

  input {
    border: 1 px solid rgba(0, 0, 0, 0.25);
    font-size: 1.1rem;
    padding: 0.6rem 1rem;
    width: 5%;
    margin: 0 1rem;
    &:focus-visible {
      box-shadow: none;
      outline: none;
    }
  }
`;

export { StyledCard };

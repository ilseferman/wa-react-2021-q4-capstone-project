import styled from 'styled-components';

const SliderList = styled.div`
  height: 60vh;
  margin: auto;
  overflow: hidden;
  position: relative;
  width: 100%;
`;

const SliderItem = styled.div`
  animation: sliderEffect 0.7s ease-in-out both;
  display: ${({ isActive }) => (isActive ? 'block' : 'none')};

  img {
    float: left;
    object-fit: cover;
    width: 100%;
    height: 80vh;
  }

  @keyframes sliderEffect {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0.6;
    }
    100% {
      opacity: 1;
    }
  }
`;

const DotsWrapper = styled.div`
  text-align: center;
  margin-top: 0vh;
`;

const Dot = styled.div`
  cursor: pointer;
  height: 6px;
  width: 6px;
  margin: 0 2px;
  background-color: ${({ isActive }) => (isActive ? '#000' : 'transparent')};
  border: solid 1px #000;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
  opacity: ${({ isActive }) => isActive && 0.7};

  &:hover {
    opacity: 0.7;
    background-color: #000;
  }
`;

export { SliderList, SliderItem, DotsWrapper, Dot };

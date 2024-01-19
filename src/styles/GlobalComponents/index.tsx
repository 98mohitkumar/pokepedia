import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: grid;
  place-items: start center;
  padding: 4rem 1rem;
`;

export const Loader = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  inset: 0;
  z-index: 1000;
  background: white;
  display: grid;
  place-items: center;
  & .loadingAnimation {
    width: 100vw;
    height: 100vh;
    background: black;
    transform: scaleX(0) translateZ(0);
    animation: loader 1.5s 0.25s cubic-bezier(0.85, 0.01, 0.4, 1) forwards;
    @keyframes loader {
      0% {
        transform-origin: left;
        transform: scaleX(0) translateZ(0);
      }
      40% {
        transform-origin: left;
        transform: scaleX(1) translateZ(0);
      }
      60% {
        transform-origin: right;
        transform: scaleX(1) translateZ(0);
      }
      100% {
        transform-origin: right;
        transform: scaleX(0) translateZ(0);
      }
    }
  }
`;

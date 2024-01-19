import styled from "styled-components";

export const PokemonWrapper = styled.div`
  width: 100%;
  height: auto;
  padding: 1rem;
  max-width: 600px;
`;

export const HeadTitle = styled.h1`
  margin: 0 0 4rem 0;
  font-size: 3.5rem;
  text-align: center;
`;

export const Search = styled.input`
  width: 100%;
  border: none;
  border-bottom: 1px solid black;
  box-shadow: none;
  padding: 0.25rem;
  margin-bottom: 4rem;

  &:focus-visible,
  &:focus {
    outline: none;
  }
`;

export const PokemonGridWrapper = styled.div`
  width: 100%;
`;

export const PokemonGrid = styled.div`
  width: 100%;
  display: grid;
  place-items: center;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.25rem;
  margin-top: 2rem;

  @media only ${({ theme }) => theme.breakpoints.sm} {
    grid-template-columns: repeat(2, 1fr);
    gap: 4vw;
  }

  a {
    width: 100%;
  }
`;

export const PokemonCard = styled.div`
  width: 100%;
  height: auto;
  padding: 1rem;
  background-color: white;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  border-radius: 12px;
  overflow: hidden;
`;

export const PokemonImg = styled.div<{ bg: string }>`
  width: 100%;
  height: 180px;
  margin-bottom: 1rem;
  background: grey;
  background: ${({ bg }) =>
    `url('https://raw.githubusercontent.com/98mohitkumar/pokemon/main/${bg}') no-repeat center center /contain`};
`;

export const PokemonInfoWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 1rem;
  max-width: 600px;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: max-content 1fr;
  gap: 1.5rem;

  p {
    font-size: 14px;
    font-weight: 500;
    display: block;
    position: relative;
    padding-left: 1.25rem;
    display: flex;
    align-items: center;

    &::after {
      content: "";
      position: absolute;
      display: inline-block;
      left: 0;
      width: 0;
      height: 0;
      border-top: 5px solid transparent;
      border-left: 5px solid transparent;
      border-bottom: 5px solid transparent;
      border-right: 5px solid black;
    }
  }
`;

export const Iwrapper = styled.div`
  width: 100%;
  display: grid;
  place-items: flex-start center;
  padding: 2rem 0rem;
`;

export const Owrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1.25fr;
  place-items: start;
  gap: 2rem;

  @media only ${({ theme }) => theme.breakpoints.sm} {
    grid-template-columns: 1fr;
  }
`;

export const PokemonInfoBg = styled.div<{ bg: string }>`
  width: 100%;
  max-width: 250px;
  height: 250px;
  background: grey;
  background: ${({ bg }) =>
    `url('https://raw.githubusercontent.com/98mohitkumar/pokemon/main/${bg}') no-repeat center center /contain`};
`;

export const InfoWrapper = styled.div`
  width: 100%;
  height: auto;
  align-self: flex-start;
  padding: 0rem 1rem;

  h1 {
    margin: 0 0 0.5rem 0;
  }

  .type {
    font-size: 18px;
  }
`;

export const BigTitle = styled.span`
  position: fixed;
  inset: 0;
  margin: 4rem 2rem;
  font-weight: 500;
  z-index: -1;
  color: #80808085;
  font-size: 15rem;
  text-align: right;
  writing-mode: vertical-lr;
  white-space: nowrap;

  @media only ${({ theme }) => theme.breakpoints.lg} {
    display: none;
  }
`;

export const Cover = styled.div`
  width: 100vw;
  height: 100vh;
  inset: 0;
  background: white;
  position: fixed;
  z-index: 800;
  transform: translateY(0);
  animation: reveal 1s cubic-bezier(0.85, 0.01, 0.4, 1) forwards;

  @keyframes reveal {
    to {
      transform: translateY(-100%);
    }
  }
`;

export const StatsWrapper = styled.div`
  width: 100%;
  margin-top: 2.5rem;

  .statsHead {
    font-size: 2rem;
    font-weight: 500;
    display: block;
    margin-bottom: 1rem;
  }

  .key {
    color: #808080d6;
  }

  .value {
    font-weight: 500;
  }

  .stat:not(:last-child) {
    margin-bottom: 1rem;
  }
`;

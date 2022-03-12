import type { NextPage } from "next";
import Head from "next/head";
import React from "react";
import Pokemons from "../components/Pokemons/Pokemons";
import { Wrapper } from "../styles/GlobalComponents";

type props = {
  error: boolean;
  resData?: [];
};

const Home: NextPage<props> = ({ error, resData }) => {
  return (
    <>
      <Head>
        <title>Pokemons</title>
      </Head>

      <Wrapper>
        {error ? <h1>Something went wrong...</h1> : <Pokemons data={resData} />}
      </Wrapper>
    </>
  );
};

export default Home;

Home.getInitialProps = async () => {
  try {
    const response = await fetch(
      "https://raw.githubusercontent.com/98mohitkumar/pokemon/main/index.json"
    );

    const error = response.ok ? false : true;

    if (error) {
      throw new Error();
    } else {
      const resData = await response.json();
      return {
        error,
        resData,
      };
    }
  } catch {
    return { error: true };
  }
};

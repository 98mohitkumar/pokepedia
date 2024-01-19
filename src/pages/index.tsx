import type { NextPage } from "next";
import React from "react";
import Pokemons from "../components/Pokemons/Pokemons";
import { Wrapper } from "../styles/GlobalComponents";

export type HomePageProps = {
  error: boolean;
  data: { id: number; image: string; name: string }[] | [];
};

const Home: NextPage<HomePageProps> = ({ error, data }) => {
  return <Wrapper>{error ? <h1>Something went wrong...</h1> : <Pokemons data={data} />}</Wrapper>;
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
        data: resData
      };
    }
  } catch {
    return { error: true, data: [] };
  }
};

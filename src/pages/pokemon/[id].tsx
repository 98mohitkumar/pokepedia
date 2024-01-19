import { NextPage } from "next";
import Head from "next/head";
import React, { Fragment } from "react";
import PokemonInfo from "../../components/Pokemons/PokemonInfo";
import { Wrapper } from "../../styles/GlobalComponents";

type AppProps = {
  data: { name: string; type: string[]; stats: any[]; image: string } | null;
  error: boolean;
};

const Pokemon: NextPage<AppProps> = ({ data, error }) => {
  return (
    <>
      <Wrapper>
        {error ? (
          <h1>Data doesn&apos;t exist.</h1>
        ) : (
          <Fragment>
            <Head>
              <title>{data?.name} - Pokemon Database</title>
            </Head>

            {data ? <PokemonInfo data={data} /> : null}
          </Fragment>
        )}
      </Wrapper>
    </>
  );
};

export default Pokemon;

Pokemon.getInitialProps = async (ctx) => {
  try {
    const id = ctx.query.id;

    const res = await fetch(
      `https://raw.githubusercontent.com/98mohitkumar/pokemon/main/pokemon/${id}.json`
    );

    const error = res.ok ? false : true;

    if (error) {
      throw new Error("cannot fetch data");
    } else {
      const data = await res.json();
      return {
        data,
        error
      };
    }
  } catch {
    return { error: true, data: null };
  }
};

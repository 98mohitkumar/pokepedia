import { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import PokemonInfo from '../../components/Pokemons/PokemonInfo';
import { Wrapper } from '../../styles/GlobalComponents';

type AppProps = {
  data?: { name: string; type: string[]; stats: any[]; image: string };
  error: boolean;
};

const Pokemon: NextPage<AppProps> = ({ data, error }) => {
  return (
    <>
      <Wrapper>
        {error ? (
          <h1>Data doesn&apos;t exist.</h1>
        ) : (
          <>
            <Head>
              <title>{data?.name}</title>
            </Head>

            <PokemonInfo data={data} />
          </>
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
      throw new Error();
    } else {
      const data = await res.json();
      return {
        data,
        error
      };
    }
  } catch {
    return { error: true };
  }
};

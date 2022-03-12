import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  HeadTitle,
  PokemonCard,
  PokemonGrid,
  PokemonGridWrapper,
  PokemonImg,
  PokemonWrapper,
  Search,
  Cover,
} from "./PokemonStyles";

type props = {
  data?: any[];
};

const Pokemons: React.FC<props> = ({ data }) => {
  const [iterate, setIterate] = useState<number[]>([]);

  useEffect(() => {
    for (let i = 0; i < 6; i++) {
      let random = Math.floor(Math.random() * data!.length);
      setIterate((prev: number[]) => [...prev, random]);
    }
  }, []);

  return (
    <>
      <PokemonWrapper>
        <Cover />
        <HeadTitle>Pokemon Database</HeadTitle>
        <Search type="text" placeholder="Click here to search" />

        <PokemonGridWrapper>
          <span>Trending</span>
          <PokemonGrid>
            {iterate.map((pos, i) => (
              <Link href={`/pokemon/${data![pos].id}`} key={i} passHref>
                <a>
                  <PokemonCard>
                    <PokemonImg bg={data![pos].image} />
                    <span>{data![pos].name}</span>
                  </PokemonCard>
                </a>
              </Link>
            ))}
          </PokemonGrid>
        </PokemonGridWrapper>
      </PokemonWrapper>
    </>
  );
};

export default Pokemons;

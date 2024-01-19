import Link from "next/link";
import React, { Fragment, useRef, useState } from "react";
import {
  HeadTitle,
  PokemonCard,
  PokemonGrid,
  PokemonGridWrapper,
  PokemonImg,
  PokemonWrapper,
  Search,
  Cover
} from "./PokemonStyles";
import { HomePageProps } from "../../pages";

type PokemonsProps = {
  data: HomePageProps["data"];
};

const Pokemons: React.FC<PokemonsProps> = ({ data }) => {
  const [searchArr, setSearchArr] = useState<any[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const inputHandler = () => {
    const searchQuery = inputRef.current?.value.toLowerCase();

    if (searchQuery && searchQuery?.trim() !== "") {
      const searchRes = data?.filter((pokemon) => pokemon.name.toLowerCase().includes(searchQuery));
      searchRes?.splice(15);
      setSearchArr(searchRes);
    } else {
      setSearchArr([]);
    }
  };

  const iterate = [...Array(6)].map(() => Math.floor(Math.random() * data?.length));

  return (
    <Fragment>
      <PokemonWrapper>
        <Cover />
        <HeadTitle>Pokemon Database</HeadTitle>
        <Search
          type='text'
          placeholder='Click here to search'
          ref={inputRef}
          onChange={inputHandler}
        />

        {searchArr?.length > 0 ? (
          <PokemonGridWrapper>
            <span>Search results :</span>
            <PokemonGrid>
              {searchArr?.map((pokemon, i) => (
                <Link href={`/pokemon/${pokemon.id}`} key={i} passHref>
                  <a>
                    <PokemonCard>
                      <PokemonImg bg={pokemon.image} />
                      <span>{pokemon.name}</span>
                    </PokemonCard>
                  </a>
                </Link>
              ))}
            </PokemonGrid>
          </PokemonGridWrapper>
        ) : (
          <PokemonGridWrapper>
            <span>Trending :</span>
            <PokemonGrid>
              {iterate.map((pos, i) => (
                <Link href={`/pokemon/${data[pos].id}`} key={i} passHref>
                  <a>
                    <PokemonCard>
                      <PokemonImg bg={data[pos].image} />
                      <span>{data[pos].name}</span>
                    </PokemonCard>
                  </a>
                </Link>
              ))}
            </PokemonGrid>
          </PokemonGridWrapper>
        )}
      </PokemonWrapper>
    </Fragment>
  );
};

export default Pokemons;

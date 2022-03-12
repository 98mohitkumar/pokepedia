import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
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

  const [searchArr, setSearchArr] = useState<any[] | undefined>([]);

  const inputRef = useRef<HTMLInputElement>(null);

  const inputHandler = () => {
    const searchQuery = inputRef.current?.value.toLowerCase();

    if (searchQuery !== "" && searchQuery?.trim() !== "") {
      const searchRes = data?.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(searchQuery)
      );
      searchRes?.splice(15);
      setSearchArr(searchRes);
    } else {
      setSearchArr([]);
    }
  };

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
        <Search
          type="text"
          placeholder="Click here to search"
          ref={inputRef}
          onChange={inputHandler}
        />

        {!searchArr?.length && (
          <PokemonGridWrapper>
            <span>Trending :</span>
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
        )}

        {searchArr?.length !== 0 && (
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
        )}
      </PokemonWrapper>
    </>
  );
};

export default Pokemons;

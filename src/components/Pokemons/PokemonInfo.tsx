import Link from "next/link";
import React from "react";
import {
  Iwrapper,
  Owrapper,
  PokemonInfoWrapper,
  PokemonInfoBg,
  InfoWrapper,
  BigTitle,
  Cover,
  StatsWrapper
} from "./PokemonStyles";

type PokemonInfoProps = {
  data: { name: string; type: string[]; stats: any[]; image: string };
};

const PokemonInfo: React.FC<PokemonInfoProps> = ({ data }) => {
  return (
    <>
      <PokemonInfoWrapper>
        <Link href='/' passHref>
          <a>
            <p>Back to home</p>
          </a>
        </Link>
        <BigTitle>{data?.name}</BigTitle>
        <Cover />
        <Iwrapper>
          <Owrapper>
            <PokemonInfoBg bg={data.image} />
            <InfoWrapper>
              <h1>{data?.name}</h1>
              <span className='type'>{data?.type.join(", ")}</span>
              <StatsWrapper>
                <span className='statsHead'>Stats</span>
                {data?.stats.map((stat, i) => (
                  <div key={i} className='stat'>
                    <span className='key'>{stat.name} : </span>
                    <span className='value'>{stat.value}</span>
                  </div>
                ))}
              </StatsWrapper>
            </InfoWrapper>
          </Owrapper>
        </Iwrapper>
      </PokemonInfoWrapper>
    </>
  );
};

export default PokemonInfo;

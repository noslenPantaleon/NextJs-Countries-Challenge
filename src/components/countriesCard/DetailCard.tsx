import { FC } from 'react';

interface Props {
  name: string;
  population: number;
  region: string;
  capital: string;
}

const Detail: FC<Props> = ({ name, population, region, capital }) => {
  return (
    <>
      <div>
        <h1>{name}</h1>
      </div>

      <div>
        <div>
          <span>
            <h3>
              <b>Population:</b>
            </h3>
            <h4>{population}</h4>
          </span>

          <span>
            <h3>
              <b>Region:</b>
            </h3>
            <h4>{region}</h4>
          </span>

          <span>
            <h3>
              <b>Capital:</b>
            </h3>
            <h4>{capital}</h4>
          </span>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default Detail;

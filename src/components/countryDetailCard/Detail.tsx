import { FC } from 'react';
import styles from './detail.module.scss';

interface Props {
  name: string;
  nativeName: string;
  population: number;
  region: string;
  subRegion: string;
  capital: string;
  toplevelDomain: string;
  currency: string;
  languages: Array<string>;
  borderText: string;
  bordersCountries: string;
}

const Detail: FC<Props> = ({
  name,
  population,
  region,
  subRegion,
  capital,
  toplevelDomain,
  currency,
  languages,
  nativeName,
  borderText,
  bordersCountries,
}) => {
  return (
    <>
      <div className={styles.title}>
        <h1>{name}</h1>
      </div>

      <div className={styles.info}>
        <div>
          <span>
            <h3>
              <b>Native Name:</b>
            </h3>
            <h4>{nativeName}</h4>
          </span>
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
              <b>SubRegion:</b>
            </h3>
            <h4>{subRegion}</h4>
          </span>
          <span>
            <h3>
              <b>Capital:</b>
            </h3>
            <h4>{capital}</h4>
          </span>
        </div>
        <div>
          <span>
            <h3>
              <b>Top Level Domain:</b>
            </h3>
            <h4>{toplevelDomain}</h4>
          </span>
          <span>
            <h3>
              <b> Currency:</b>
            </h3>
            <h4>{currency}</h4>
          </span>
          <span>
            <h3>
              <b>Languages:</b>
            </h3>
            <h4>{languages}</h4>
          </span>
        </div>
      </div>
      <div className={styles.containerBorders}>
        <h3>
          <b>{borderText}</b>
        </h3>
        <h3 className={styles.border}>{bordersCountries}</h3>
      </div>
    </>
  );
};

export default Detail;

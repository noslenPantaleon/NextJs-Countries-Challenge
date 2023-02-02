import { FC } from "react";
import styles from "./countriesDetail.module.scss";

interface Props {
  name: string;
  population: number;
  flag: string;
  subRegion: string;
  capital: string;
  toplevelDomain: string;
  currency: string;
  languages: Array<string>;
}

const Detail: FC<Props> = ({
  name,
  population,
  flag,
  subRegion,
  capital,
  toplevelDomain,
  currency,
  languages,
}) => {
  return (
    <div className={styles.container}>
      <button>Back</button>

      <div>
        <img className={styles.flagImage} src={flag} />
      </div>

      <div>
        <h2>{name}</h2>
        <h3>{population}</h3>
        <h3>{flag}</h3>
        <h3>{subRegion}</h3>
        <h3>{capital}</h3>
        <h3>{toplevelDomain}</h3>
        <h3>{currency}</h3>
        <h3>{languages}</h3>
      </div>
    </div>
  );
};

export default Detail;

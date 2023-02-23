import { FC } from 'react';
import styles from './countryDetail.module.scss';
import { motion } from 'framer-motion';

interface Props {
  image: string;
  name: string;
  nativeName: string;
  population: number;
  region: string;
  subRegion: string;
  capital: string;
  toplevelDomain: string;
  currency: any;
  languages: string;
  borderText: string;
  bordersCountries: string;
}

const CountryDetailCard: FC<Props> = ({
  image,
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
  const variants = {
    hidden: {
      x: 200,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.5,
      },
    },
  };

  const item = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <>
      <motion.section
        className={styles.infoContainer}
        custom={{ delay: 0.2 }}
        initial='hidden'
        animate='visible'
        exit='hidden'
        variants={variants}
      >
        <div>
          <img className={styles.flagImage} src={image} />
        </div>
        <div>
          <h1 className={styles.title}>{name}</h1>
          <motion.div variants={item} className={styles.info}>
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
          </motion.div>
          <div className={styles.containerBorders}>
            <h3>
              <b>{borderText}</b>
            </h3>
            <h3 className={styles.border}>{bordersCountries}</h3>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default CountryDetailCard;

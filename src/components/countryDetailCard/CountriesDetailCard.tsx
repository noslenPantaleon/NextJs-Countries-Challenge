import styles from './countriesDetail.module.scss';
import Link from 'next/link';
import { IoMdArrowBack } from 'react-icons/io';

const CountriesDetailCard = ({ country }) => {
  return (
    <>
      <section className={styles.container}>
        <div>
          <Link href='/'>
            <button>Back</button>
          </Link>
        </div>

        <div className={styles.infoContainer}>
          <div>
            <img className={styles.flagImage} src={country[0]?.flags?.png} />
          </div>

          <div className={styles.info}>
            <div>
              <h1>
                <b>{country[0]?.name.official}</b>
              </h1>

              <span>
                <h3>
                  <b>Native Name:</b>
                </h3>
                <h3>{country[0]?.name.common}</h3>
              </span>

              <span>
                <h3>
                  <b>Population:</b>
                </h3>
                <h3>{country[0]?.population}</h3>
              </span>

              <span>
                <h3>
                  <b>Region:</b>
                </h3>

                <h3>{country[0]?.region}</h3>
              </span>

              <span>
                <h3>
                  <b>SubRegion:</b>
                </h3>

                <h3>{country[0]?.subregion}</h3>
              </span>

              <span>
                <h3>
                  <b>Capital:</b>
                </h3>
                <h3>{country[0]?.capital}</h3>
              </span>
            </div>

            <div>
              <span>
                <h3>
                  <b>Top Level Domain:</b>
                </h3>

                <h3>{country[0]?.tld}</h3>
              </span>

              <span>
                <h3>
                  <b> Currency:</b>
                </h3>

                <h3>{country[0]?.currencies.name}</h3>
              </span>
              <span>
                <h3>
                  <b>Languages:</b>
                </h3>
                <h3>
                  {country[0]?.languages.bar ||
                    country[0]?.languages.eng ||
                    country[0]?.languages.spa}
                </h3>
              </span>
            </div>

            <div>
              <h3>
                <b>Border Countries:</b>
              </h3>
              <h3>{country[0]?.borders}</h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CountriesDetailCard;

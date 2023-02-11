import styles from './countries.module.scss';
import Link from 'next/link';

const countriesCard = ({ countries }) => {
  return (
    <>
      <section className={styles.cardContainer}>
        {countries?.map((country: any) => {
          return (
            <Link href={`/countries/${country.name.common}`}>
              <section key={country.id} className={styles.cardCountries}>
                <div className={styles.cardImage}>
                  <img className={styles.flagImage} src={country?.flags?.png} />
                </div>
                <div className={styles.textContainer}>
                  <h1>{country.name.common} </h1>
                </div>

                <section>
                  <div className={styles.textContainer}>
                    <h4>
                      <b>Population:</b>
                    </h4>
                    <h4>{country.population.toLocaleString()}</h4>
                  </div>
                  <div className={styles.textContainer}>
                    <h4>
                      <b>Region:</b>
                    </h4>
                    <h4>{country.region}</h4>
                  </div>
                  <div className={styles.textContainer}>
                    <h4>
                      <b>Capital:</b>
                    </h4>
                    <h4>{country.capital}</h4>
                  </div>
                </section>
              </section>
            </Link>
          );
        })}
      </section>
    </>
  );
};

export default countriesCard;

import styles from './countries.module.scss';
import Link from 'next/link';
import DetailCard from './DetailCard';

const countriesCard = ({ countries }) => {
  return (
    <>
      <section className={styles.cardContainer}>
        {countries?.map((country: any, index: any) => {
          return (
            <Link key={index} href={`/countries/${country.name.common}`}>
              <section className={styles.cardCountries}>
                <div className={styles.cardImage}>
                  <img className={styles.flagImage} src={country?.flags?.png} />
                </div>
                <div className={styles.cardInfo}>
                  <DetailCard
                    name={country.name.common}
                    population={country.population.toLocaleString()}
                    region={country.region}
                    capital={country.capital}
                  />
                </div>
              </section>
            </Link>
          );
        })}
      </section>
    </>
  );
};

export default countriesCard;

import styles from './countries.module.scss';
import Link from 'next/link';
import DetailCard from './DetailCard';
import { paginate } from '../../utils/paginate';
import { motion } from 'framer-motion';

const countriesCard = ({ countries, pages }) => {
  const pageSize = 20;
  const paginatedPosts = paginate(countries, pages, pageSize);

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <>
      <motion.section
        className={styles.cardContainer}
        initial='hidden'
        animate='visible'
        variants={variants}
        transition={{ ease: 'easeOut', delay: 0.5 }}
      >
        {paginatedPosts?.map((country: any, index: any) => {
          return (
            <Link key={index} href={`/countries/${country.name.common}`}>
              <motion.section
                className={styles.cardCountries}
                whileHover={{ cursor: 'pointer', scale: 1.1 }}
              >
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
              </motion.section>
            </Link>
          );
        })}
      </motion.section>
    </>
  );
};

export default countriesCard;

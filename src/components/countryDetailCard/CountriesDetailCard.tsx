import styles from './countriesDetail.module.scss';
import Link from 'next/link';
import { IoMdArrowBack } from 'react-icons/io';
import BaseButton from '../BaseButton/BaseButton';
import Detail from './Detail';

const CountriesDetailCard = ({ country }) => {
  return (
    <>
      <section className={styles.container}>
        <div>
          <Link href='/'>
            <BaseButton
              text='Back'
              mainButton
              icon={<IoMdArrowBack size={20} />}
            />
          </Link>
        </div>
        <div>
          <article className={styles.infoContainer}>
            <div>
              <img className={styles.flagImage} src={country[0]?.flags?.png} />
            </div>

            <div>
              <Detail
                name={country[0]?.name.official}
                nativeName={country[0]?.name.common}
                population={country[0]?.population.toLocaleString()}
                region={country[0]?.region}
                subRegion={country[0]?.subregion}
                capital={country[0]?.capital}
                toplevelDomain={country[0]?.tld}
                currency={country[0]?.currencies.name}
                languages={country[0]?.languages[0]}
                borderText={'Border Countries:'}
                bordersCountries={country[0]?.borders?.map(
                  (countryBorder: any) => {
                    return <h3 className={styles.borders}>{countryBorder}</h3>;
                  }
                )}
              />
            </div>
          </article>
        </div>
      </section>
    </>
  );
};

export default CountriesDetailCard;

import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React from 'react';
import { useCallback, useState, useEffect } from 'react';
import { getCountriesByName } from '../../services/countries';
import CountryDetailCard from '../../components/countryDetailCard/CountryDetailCard';
import styles from './name.module.scss';
import Link from 'next/link';
import { IoMdArrowBack } from 'react-icons/io';
import BaseButton from '../../components/BaseButton/BaseButton';
import { motion } from 'framer-motion';

const DetailPage: NextPage = () => {
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const router = useRouter();
  const [country, setCountry]: any = useState([]);

  const getCountryByNameApi = useCallback(
    async (country) => {
      const countryData = await getCountriesByName(country);
      setCountry(countryData);
    },
    [router.query.name]
  );

  useEffect(() => {
    if (router?.query?.name) getCountryByNameApi(router.query.name);
  }, [router.query.name]);

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
          <article>
            <CountryDetailCard
              image={country[0]?.flags?.png}
              name={country[0]?.name.official}
              nativeName={country[0]?.name.common}
              population={country[0]?.population.toLocaleString()}
              region={country[0]?.region}
              subRegion={country[0]?.subregion}
              capital={country[0]?.capital}
              toplevelDomain={country[0]?.tld}
              currency={
                country[0]?.currencies[Object?.keys(country[0]?.currencies)[0]]
                  ?.name
              }
              languages={
                country[0]?.languages[Object.keys(country[0]?.languages)[0]]
              }
              borderText={'Border Countries:'}
              bordersCountries={country[0]?.borders?.map(
                (countryBorder: any, index) => {
                  return (
                    <Link key={index} href={`/countries/${countryBorder}`}>
                      <motion.h3
                        className={styles.borders}
                        initial='hidden'
                        animate='visible'
                        variants={variants}
                        whileHover={{ scale: 1.1 }}
                        transition={{
                          type: 'spring',
                          stiffness: 400,
                          damping: 10,
                        }}
                      >
                        {countryBorder.toLowerCase()}
                      </motion.h3>
                    </Link>
                  );
                }
              )}
            />
          </article>
        </div>
      </section>
    </>
  );
};

export default DetailPage;

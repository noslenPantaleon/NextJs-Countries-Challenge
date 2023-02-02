import styles from "./countriesDetail.module.scss";
import Link from "next/link";
import Detail from "./Detail";
import { IoMdArrowBack } from "react-icons/io";

const CountriesDetailCard = ({ country }) => {
  return (
    <main className={styles.container}>
      {country.map((countryDetail: any, index) => {
        return (
          <section key={index}>
            <button className={styles.button}>
              <IoMdArrowBack color={"var(--icon-color-primary)"} size={20} />
              <Link href="/">Back</Link>
            </button>
            <div className={styles.info}>
              <img
                className={styles.flagImage}
                src={countryDetail?.flags?.png}
              />

              <div>
                <h2>{countryDetail.name.common}</h2>
                <span>
                  <h3>
                    <b>Native Name:</b>
                  </h3>
                  <h3>{countryDetail.name.nativeName.common}</h3>
                </span>

                <span>
                  <h3>
                    <b>Population:</b>
                  </h3>
                  <h3>{countryDetail.population}</h3>
                </span>

                <span>
                  <h3>
                    <b>Region:</b>
                  </h3>

                  <h3>{countryDetail.region}</h3>
                </span>

                <span>
                  <h3>
                    <b>SubRegion:</b>
                  </h3>

                  <h3>{countryDetail.subregion}</h3>
                </span>

                <span>
                  <h3>
                    <b>Capital:</b>
                  </h3>
                  <h3>{countryDetail.capital}</h3>
                </span>
              </div>

              <div>
                <span>
                  <h3>
                    <b>Top Level Domain:</b>
                  </h3>

                  <h3>{countryDetail.tld}</h3>
                </span>

                <span>
                  <h3>
                    <b> Currency:</b>
                  </h3>

                  <h3>{countryDetail.currencies[0]}</h3>
                </span>
                <span>
                  <h3>
                    <b>Languages:</b>
                  </h3>
                  <h3>{countryDetail.languages.bar}</h3>
                </span>
              </div>
            </div>
            ;
            <div className={styles.borders}>
              <h3>
                <b>Border Countries:</b>
              </h3>
              <h3>{countryDetail.borders.toString().split(" ")}</h3>
            </div>
          </section>
        );
      })}
    </main>
  );
};

export default CountriesDetailCard;

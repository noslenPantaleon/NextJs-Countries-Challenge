import type { NextPage } from "next";
import CountriesCard from "../components/countriesCard/CountriesCard";
import { getCountries } from "../services/countries";
import { getCountriesByName } from "../services/countries";
import { getCountryByRegion } from "../services/countries";
import { useState, useEffect} from "react";
import SearchBar from "../components/searchBar";
import FilterCountry from "../components/FilterCountry/FilterCountry";
import styles from "../styles/home.module.scss";



const Home: NextPage = () => {
  const [countries, setCountries]: any = useState([]);

  const getCountriesApi = async () => {
    const countries = await getCountries();
    setCountries(countries);
  };

  const handlegetCountryByRegion = (region: any) => {
    setTimeout(async () => {
      let countriesData = await getCountryByRegion(region);
      console.log(countriesData);
      if (countriesData?.status === 404) {
        return setCountries([]);
      }
      setCountries(countriesData);
    }, 1000);
  };

  const handleChangeName = (value: any) => {
    setTimeout(async () => {
      let countriesData = await getCountriesByName(value);
      console.log(countriesData);
       if (countriesData?.message == 'Page Not Found') {
        return
      } 

      if (countriesData?.status === 404) {
        return setCountries([]);
      }
      setCountries(countriesData);
    }, 1000);
  };



  useEffect(() => {
    getCountriesApi();
  }, []);

  return (
    <main  >
        <div className={styles.searchBar}>
        <SearchBar handleChangeName={handleChangeName} />
        <FilterCountry onSelect={handlegetCountryByRegion} />
      </div>

    {countries.length !== 0 && <CountriesCard countries={countries} />}
      {countries.length === 0 && <div>Not found</div>}
    </main>
  );
};

export default Home;

import { NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";
import { useCallback, useState, useEffect } from "react";
import CountriesDetailCard from "../../components/countryDetailCard/CountriesDetailCard";
import { getCountriesByName } from "../../services/countries";
import Navbar from "../../components/navbar/Navbar";

const Detail: NextPage = () => {
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
    <div>
  
      {country && <CountriesDetailCard country={country} />}
    </div>
  );
};

export default Detail;

export const getCountries = async () => {
  try {
    const data = await fetch('https://restcountries.com/v3.1/all', {
      method: 'GET',
      headers: {
        'x-rapidapi-host': '',
        'x-rapidapi-key': '',
      },
    });
    const jsonData = await data.json();
    return jsonData;
  } catch (err) {
    throw new Error(err);
  }
};
// `${apiURL}/name/${countryName}`

export const getCountriesByName = async (name: string) => {
  try {
    const data = await fetch(`https://restcountries.com/v3.1/name/${name}`, {
      method: 'GET',
      headers: {
        'x-rapidapi-host': '',
        'x-rapidapi-key': '',
      },
    });
    const jsonData = await data.json();
    return jsonData;
  } catch (err) {
    throw new Error(err);
  }
};

export const getCountryByRegion = async (regionName) => {
  try {
    const data = await fetch(
      `https://restcountries.com/v3.1/region/${regionName}`,
      {
        method: 'GET',
        headers: {
          'x-rapidapi-host': '',
          'x-rapidapi-key': '',
        },
      }
    );
    const jsonData = await data.json();
    return jsonData;
  } catch (err) {
    throw new Error(err);
  }
};



export const getCountries = async () => {
  const data = await 

  fetch("https://restcountries.com/v3.1/all", {
    method: "GET",
    headers: {
      "x-rapidapi-host": "",
      "x-rapidapi-key": "",
    },
  });
  const jsonData = await data.json();
 console.log(1,   jsonData);
 
  return jsonData

}
// `${apiURL}/name/${countryName}`



export const getCountriesByName = async (name: string) => {
  
  const data = await 
  fetch(`https://restcountries.com/v3.1/name/${name}`, {
    method: "GET",
    headers: {
      "x-rapidapi-host": "",
      "x-rapidapi-key": "",
    },
  });
  const jsonData = await data.json();
  return jsonData

}



export const getCountryByRegion = async (regionName) => {

  const data = await 
  fetch(`https://restcountries.com/v3.1/region/${regionName}`, {
    method: "GET",
    headers: {
      "x-rapidapi-host": "",
      "x-rapidapi-key": "",
    },
  });
  const jsonData = await data.json();
  console.log(3,   jsonData);
  return jsonData

}

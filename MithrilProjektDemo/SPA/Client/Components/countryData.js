"use strict";

let fetchCountry = {
  isLoading: "is loading",
  confirmed: "",
  deaths: "",
  recovered: "",
  country: "",
  population: "",
  life_expectancy: "",
  continent: "",
  location: "",
  capital_city: "",
  defaultCountry: "Greece",

  getData: function (country) {
    m.request({
      method: "GET",
      url: "https://covid-api.mmediagroup.fr/v1/cases?country=" + (country || fetchCountry.defaultCountry),
    }).then(function (data) {
      try {
        //console.log(data);
        fetchCountry.confirmed = data.All.confirmed;
        fetchCountry.deaths = data.All.deaths;
        fetchCountry.recovered = data.All.recovered;
        fetchCountry.country = data.All.country;
        fetchCountry.population = data.All.population;
        fetchCountry.life_expectancy = data.All.life_expectancy;
        fetchCountry.continent = data.All.continent;
        fetchCountry.location = data.All.location;
        fetchCountry.capital_city = data.All.capital_city;
      } catch (error) {
        fetchCountry.country = "There is no country to search for";
        console.log(" Es gibt keine Informationen. Grund: " + error);
      }
    });
  },
};

export default fetchCountry;

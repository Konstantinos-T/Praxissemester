"use strict";


var VaccineData = {
    country: "",
    administered: "",
    people_partially_vaccinated: "",
    people_vaccinated: "",
    updated: "",
    defaultCountry: "Germany",
  getData: function (country) {
    m.request({
      method: "GET",
      url: "https://covid-api.mmediagroup.fr/v1/vaccines?country=" + (country || VaccineData.defaultCountry),
    }).then(function (data) {
      try {
        //console.log(data);
        VaccineData.country = data.All.country;
        VaccineData.administered = data.All.administered;
        VaccineData.people_partially_vaccinated = data.All.people_partially_vaccinated;
        VaccineData.people_vaccinated = data.All.people_vaccinated;
        VaccineData.updated = data.All.updated;
      } catch (error) {
        VaccineData.country = "There is no country to search for";
        console.log(" Es gibt keine Informationen. Grund: " + error);
      }
    });
  },
};

export default VaccineData;
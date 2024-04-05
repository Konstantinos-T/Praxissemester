"use strict";

/* Das ist der Controller um die Daten aller Länder von der API mit der REST-Anfrage (GET) zu bekommen  */
/* In Dieser Komponente befinden sich zwei Datensätze die für das Dashboard bestimmt sind.*/

let fetchAllCountries = {
  countryNames: [],
  countryData: [],
  
  fetchAll: function () {
    return m.request({
      method: "GET",
      url: "https://covid-api.mmediagroup.fr/v1/cases"
    }).then(function (data) {
      try {
/* ------------ Das Komplette JSON Objekt wird in den Array der Komponte gespeichert    ----------------------------------- */
        fetchAllCountries.countryData = data;
/* ------------ Der Zugriff auf countryData funktioniert über der Punkt operator ->   fetchAllCountries.countryNames  ----- */

        for (let x in data){
            fetchAllCountries.countryNames.push(x);
        }
/* ------------ Mit der foreach Schleife werden die Länder des JSON-Objekts in das countryNames Array gespeichert  --------- */

      } catch (error) {
        console.log(" Error message: " + error);
      }
    });
  },
};
    

export default fetchAllCountries;

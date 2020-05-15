const api = require("../service/api");

module.exports = function start() {
  console.log("Running jobs every 1 hours");
  api
    .get("countries/brazil")
    .then((response) => {
      const numbers = response.data;

      const data = {
        newConfirmed: numbers.todayCases,
        newDeaths: numbers.todayDeaths,
        totalRecovered: numbers.recovered,
        totalConfirmed: numbers.cases,
        totalDeaths: numbers.deaths,
        newRecovered: "",
      };

      api.post("https://covid19-macedorenata.herokuapp.com/corona", data);
    })
    .catch((error) => {
      console.error({ error });
    });
};

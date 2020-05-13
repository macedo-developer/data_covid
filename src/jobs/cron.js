const api = require("../service/api");

module.exports = function start() {
  console.log("Running jobs every 10 minutes");
  api
    .get("summary")
    .then((response) => {
      const numbers = response.data.Global;
      api.post("https://covid19-macedorenata.herokuapp.com/corona", numbers);
    })
    .catch((error) => {
      console.error({ error });
    });
};

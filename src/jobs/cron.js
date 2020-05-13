const api = require("../service/api");

module.exports = function start() {
  console.log("Running jobs every 10 minutes");
  api
    .get("summary")
    .then((response) => {
      const numbers = response.data.Global;
      api.post("http://localhost:2323/corona", numbers);
    })
    .catch((error) => {
      console.error({ error });
    });
};

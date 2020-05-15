const axios = require("axios");

const api = axios.create({
  baseURL: "http://coronavirus-19-api.herokuapp.com/",
});

module.exports = api;

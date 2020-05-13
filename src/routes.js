const express = require("express");

const routes = express.Router();

const DataCoronaController = require("./controllers/DataCoronaController");

routes.get("/corona", DataCoronaController.index);
routes.post("/corona", DataCoronaController.create);

module.exports = routes;

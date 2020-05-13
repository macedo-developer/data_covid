const connection = require("../database/connection");
const dateFormat = require("dateformat");

module.exports = {
  async index(req, res) {
    const date_corona = await connection("data_corona").select("*");

    return res.json(date_corona);
  },
  async create(req, res) {
    const {
      NewConfirmed,
      TotalConfirmed,
      NewDeaths,
      TotalDeaths,
      NewRecovered,
      TotalRecovered,
    } = req.body;

    let today = dateFormat(new Date(), "yyyy-mm-dd");

    const data = await connection("data_corona").where("date", today);

    let now = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss");

    if (data.length === 0) {
      const [id] = await connection("data_corona").insert({
        date: today,
        update_at: now,
        newConfirmed: NewConfirmed,
        newDeaths: NewDeaths,
        newRecovered: NewRecovered,
        totalConfirmed: TotalConfirmed,
        totalDeaths: TotalDeaths,
        totalRecovered: TotalRecovered,
      });

      return res.json({ reponse: "Data insert", id: id });
    } else {
      const affected = await connection("data_corona")
        .where("date", today)
        .update({
          update_at: now,
          newConfirmed: NewConfirmed,
          newDeaths: NewDeaths,
          newRecovered: NewRecovered,
          totalConfirmed: TotalConfirmed,
          totalDeaths: TotalDeaths,
          totalRecovered: TotalRecovered,
        });

      return res.json({ reponse: "Data update", rowsAffect: affected });
    }
  },
};

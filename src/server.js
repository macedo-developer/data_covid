const app = require("./app");
const cron = require("node-cron");

const jobs = require("./jobs/cron");

// cron.schedule("*/5? * * * *", () => jobs());
cron.schedule("0 */10 * * * *", () => jobs());

app.listen(2323);

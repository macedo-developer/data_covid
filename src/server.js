const app = require("./app");
const cron = require("node-cron");

const jobs = require("./jobs/cron");

cron.schedule("0 0 */1 * * * ", () => jobs());

app.listen(process.env.PORT || 2323);

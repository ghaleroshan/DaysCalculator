const getDays = require("./getDays");

(function run(startDate, endDate) {
  startDate = process.argv[2] || startDate;
  endDate = process.argv[3] || endDate;
  console.log(getDays.diffDays(startDate, endDate));
  // process.exit(0);
})();

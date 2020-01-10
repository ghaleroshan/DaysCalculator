const msPerDay = 1000 * 60 * 60 * 24;
const validMinDate = new Date("1901/01/01").getTime();
const validMaxDate = new Date("2999/12/31").getTime();

exports.diffDays = () => {
  const startDate = process.argv[2];
  const endDate = process.argv[3];
  const startingDate = new Date(startDate).getTime();
  const endingDate = new Date(endDate).getTime();
  if (startingDate > validMinDate && endingDate < validMaxDate) {
    if (startingDate !== endingDate) {
      const diff = endingDate - startingDate;
      const noOfWorkingDays = Math.floor((diff - 1) / msPerDay);
      console.log(`The number of elapsed days are: ${noOfWorkingDays} days`);
      process.exit(0);
    }
    console.log("The number of elapsed days are 0");
  } else {
    console.log("Please enter Valid Days");
  }
};
console.log(exports.diffDays());

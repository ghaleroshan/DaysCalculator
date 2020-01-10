const msPerDay = 1000 * 60 * 60 * 24;
const validMinDate = new Date("1901/01/01").getTime();
const validMaxDate = new Date("2999/12/31").getTime();

exports.diffDays = (startDate, endDate) => {
  startDate = process.argv[2] || startDate;
  endDate = process.argv[3] || endDate;

  const startingDate = new Date(startDate).getTime();
  const endingDate = new Date(endDate).getTime();

  if (startingDate > validMinDate && endingDate < validMaxDate) {
    if (startDate === endDate) {
      return "The number of elapsed days are 0 days";
    }
    const diff = endingDate - startingDate;
    const noOfWorkingDays = Math.floor((diff - 1) / msPerDay);
    return `The number of elapsed days are: ${noOfWorkingDays} days`;
  } else {
    return "Please enter valid days";
  }
};

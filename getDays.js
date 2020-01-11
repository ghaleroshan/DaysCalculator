const validDates = (startDate, endDate) => {
  const validMinDate = new Date("1901/01/01").getTime();
  const validMaxDate = new Date("2999/12/31").getTime();
  // console.log(startDate);
  return (
    startDate > validMinDate &&
    startDate < validMaxDate &&
    endDate < validMaxDate &&
    endDate > validMinDate
  );
};

exports.diffDays = (startDate, endDate) => {
  const startingDate = new Date(startDate).getTime();
  const endingDate = new Date(endDate).getTime();
  const msPerDay = 1000 * 60 * 60 * 24;

  if (!validDates(startingDate, endingDate)) {
    return "Please enter valid days";
  }
  if (startDate === endDate) {
    return "The number of elapsed day is 0";
  }
  const diff = endingDate - startingDate;
  const noOfWorkingDays = Math.floor((diff - 1) / msPerDay);
  return `The number of elapsed days are: ${noOfWorkingDays} days`;
};

const msPerDay = 1000 * 60 * 60 * 24;
const date = new Date();
const validMinDate = new Date("1901/01/01").getTime();
const validMaxDate = new Date("2999/12/31").getTime();

process.argv.forEach(() => {
  const args = process.argv.slice(2);
  const startDate = args[0];
  const endDate = args[1];
  const startingDate = new Date(startDate).getTime();
  const endingDate = new Date(endDate).getTime();
  if (startDate !== endDate) {
    if (startingDate > validMinDate && endingDate < validMaxDate) {
      const diff = endingDate - startingDate;
      const noOfWorkingDays = Math.floor((diff - 1) / msPerDay);
      console.log(noOfWorkingDays);
    } else {
      console.log("Please enter valid dates");
    }
  } else {
    console.log("The working day is 0");
  }
});

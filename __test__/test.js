const getDays = require("../getDays");

test("Should return the number of days between the two dates", () => {
  let res = getDays.diffDays("06/02/1983", "06/22/1983");
  expect(res).toEqual("The number of elapsed days are: 19 days");
});

test("Should throw an error and prompt for entering valid days", () => {
  let res = getDays.diffDays("06/02/1890", "06/22/1983");
  expect(res).toEqual("Please enter valid days");
});

test("Should return 0 if the startDate and endDate are equal", () => {
  let res = getDays.diffDays("06/02/2000", "06/02/2000");
  expect(res).toEqual("The number of elapsed day is 0");
});

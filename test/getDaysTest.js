const getDays = require("../getDays");

test("Should return the number of days between the two dates", () => {
  let startDate = "06/02/1983";
  let endDate = "06/22/1983";
  let res = getDays(startDate, endDate);
  expect(res).toEqual(19);
});

const getDays = require("../getDays");

console.log(getDays.diffDays());

test("Should return the number of days between the two dates", () => {
  let res = getDays.diffDays("06/02/1983", "06/22/1983");
  expect(res).toEqual(`The number of elapsed days are: ${res} days`);
});

const substract = require("./substract");

test("properly substracts two number", () => {
  expect(substract(5, 10)).toBe(-5);
});

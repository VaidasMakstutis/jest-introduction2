const cloneArray = require("./cloneArray");

test("Properly clones array", () => {
  const array = [5, 7, 9];
  expect(cloneArray(array)).toEqual(array);
});

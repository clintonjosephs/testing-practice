import { stringLength, reverseString, capitalize } from "./index.js";

describe("Checking string count", () => {
  test("String should be greater than 1 and less than or equal to 10", () => {
    expect(stringLength("Full Stack Developer")).toThrow();
  });

  test("Returns the number of characters in string", () => {
    expect(stringLength("Clinton")).toBe(7);
  });
});

describe("Checking string reverse", () => {
  test("String should match reversal", () => {
    expect(reverseString("Protein")).toBe("nietorP");
  });
});

describe("Capitalize string function", () => {
  test("Should return first letter capitalized", () => {
    expect(capitalize("microverse")).toBe("M");
  });
});

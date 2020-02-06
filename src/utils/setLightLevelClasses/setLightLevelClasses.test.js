import expect from "expect";
import setLightLevelClasses from "./setLightLevelClasses";

describe("Utility - setLightLevelClasses", () => {
  it("Should return a function", () => {
    expect(setLightLevelClasses("pop")).toBeA("function");
  });
});

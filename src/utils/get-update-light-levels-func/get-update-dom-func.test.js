import expect from "expect";
import getUpdateLightLevelsFunc from ".";

describe("Utility - getUpdateLightLevelsFunc", () => {
  it("Should return a function", () => {
    expect(getUpdateLightLevelsFunc(() => {})).toBeA("function");
  });

  it("Should not trigger the callback if the light level has not changed", () => {
    const spy = expect.createSpy();
    getUpdateLightLevelsFunc(spy, "dim")(30);
    expect(spy).toNotHaveBeenCalled();
  });

  it("Should not trigger the callback if the light level has changed", () => {
    const spy2 = expect.createSpy();
    getUpdateLightLevelsFunc(spy2, "dim")(130);
    expect(spy2).toHaveBeenCalled();
  });
});

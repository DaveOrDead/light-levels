import expect from "expect";
import setLightLevel from "./setLightLevel";

describe("Utility - setLightLevel", () => {
  it("Should return a function", () => {
    expect(setLightLevel(() => {})).toBeA("function");
  });

  it("Should not trigger the callback if the light level has not changed", () => {
    const spy = expect.createSpy();
    setLightLevel(spy, "dim")(30);
    expect(spy).toNotHaveBeenCalled();
  });

  it("Should not trigger the callback if the light level has changed", () => {
    const spy2 = expect.createSpy();
    setLightLevel(spy2, "dim")(130);
    expect(spy2).toHaveBeenCalled();
  });
});

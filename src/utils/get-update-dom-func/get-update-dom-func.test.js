import expect from "expect";
import getUpdateDomFunc from ".";

describe("Utility - getUpdateDomFunc", () => {
  it("Should return a function", () => {
    expect(getUpdateDomFunc("pop")).toBeA("function");
  });
});

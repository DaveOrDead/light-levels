import expect from "expect";
import removeClassesWithPrefix from "./removeClassesWithPrefix";

describe("Utility - removeClassesWithPrefix", () => {
  it("Should remove a single class that has a specified prefix", () => {
    expect(removeClassesWithPrefix("foo-")("foo-bar fizz-buzz")).toEqual(
      "fizz-buzz"
    );
  });

  it("Should remove a multiple classes with a specified prefix", () => {
    expect(
      removeClassesWithPrefix("foo-")("foo-bar foo-mar fizz-buzz")
    ).toEqual("fizz-buzz");
  });

  it("Should not alter class names which do not contain the prefix", () => {
    expect(removeClassesWithPrefix("foo-")("fizz-bar fizz-buzz")).toEqual(
      "fizz-bar fizz-buzz"
    );
  });

  it("Should not alter class names which contain the prefix value elsewhere in the class name", () => {
    expect(removeClassesWithPrefix("foo-")("bob-foo-bar fizz-buzz")).toEqual(
      "bob-foo-bar fizz-buzz"
    );
  });
});

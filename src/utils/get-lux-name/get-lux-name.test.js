import expect from "expect";
import { LUX_SPEC_NAMES } from "../../constants";

import getLuxName from ".";

describe("Utility - getLuxName", () => {
  it("Should return 'dim' if lux is less than 50", () => {
    expect(getLuxName(30)).toEqual("dim");
  });

  it("Should return 'normal' if lux is between 50 and 1000", () => {
    expect(getLuxName(80)).toEqual("normal");
  });

  it("Should return 'washed' if lux is greater than 1000", () => {
    expect(getLuxName(1001)).toEqual("washed");
  });

  it("Should match 'LUX_SPEC_NAMES.DIM' if lux is less than 50", () => {
    expect(getLuxName(49)).toEqual(LUX_SPEC_NAMES.DIM);
  });

  it("Should match 'LUX_SPEC_NAMES.NORMAL' if lux is between 50 and 1000", () => {
    expect(getLuxName(999)).toEqual(LUX_SPEC_NAMES.NORMAL);
  });

  it("Should match 'LUX_SPEC_NAMES.WASHED' if lux is greater than 1000", () => {
    expect(getLuxName(1001)).toEqual(LUX_SPEC_NAMES.WASHED);
  });
});

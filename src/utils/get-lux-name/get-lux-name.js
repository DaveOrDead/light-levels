import { LUX_SPEC_NAMES } from "../../constants";

const getLuxName = lux => {
  let luxName = LUX_SPEC_NAMES.NORMAL;
  if (lux < 50) {
    luxName = LUX_SPEC_NAMES.DIM;
  }
  if (lux > 1000) {
    luxName = LUX_SPEC_NAMES.WASHED;
  }
  return luxName;
};

export default getLuxName;

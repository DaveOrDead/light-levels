import getLuxName from "../getLuxName/getLuxName";

const setLightLevel = (replaceLightLevelClassName, prevLuxName) => value => {
  const luxName = getLuxName(value);
  if (prevLuxName != luxName) {
    prevLuxName = luxName;
    replaceLightLevelClassName(luxName);
  }
};

export default setLightLevel;

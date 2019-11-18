import getLuxName from "../get-lux-name";

const getUpdateLightLevelsFunc = (callback, prevLuxText) => luxValue => {
  const luxText = getLuxName(luxValue);
  if (prevLuxText != luxText) {
    prevLuxText = luxText;
    callback(luxText);
  }
};

export default getUpdateLightLevelsFunc;

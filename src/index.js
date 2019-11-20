import {
  getUpdateDomFunc,
  getUpdateLightLevelsFunc,
  useAmbientLightSensor,
  useDeviceLight
} from "./utils";

const LightLevels = ({ prefix = "light-level-" } = {}) => {
  const updateLightLevels = getUpdateLightLevelsFunc(getUpdateDomFunc(prefix));

  if ("AmbientLightSensor" in window) {
    return useAmbientLightSensor(updateLightLevels);
  } else if ("ondevicelight" in window) {
    return useDeviceLight(updateLightLevels);
  } else {
    console.error("Sorry, your device does not support LightLevels");
  }
};

export default LightLevels;

import {
  setLightLevel,
  setLightLevelClasses,
  useAmbientLightSensor,
  useDeviceLight
} from "./utils";

const LightLevels = ({ prefix = "light-level-" } = {}) => {
  const setClassNames = setLightLevel(setLightLevelClasses(prefix));

  if ("AmbientLightSensor" in window) {
    return useAmbientLightSensor(setClassNames);
  } else if ("ondevicelight" in window) {
    return useDeviceLight(setClassNames);
  } else {
    console.error("Sorry, your device does not support LightLevels");
  }
};

export default LightLevels;

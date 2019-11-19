import { getUpdateLightLevelsFunc, getUpdateDomFunc } from "./utils";

const lightLevels = ({ prefix = "light-level-" } = {}) => {
  try {
    const sensor = new AmbientLightSensor();

    const setLightLevels = getUpdateLightLevelsFunc(getUpdateDomFunc(prefix));

    sensor.onreading = () => setLightLevels(sensor.illuminance);

    sensor.onerror = event => {
      // Handle runtime errors.
      if (event.error.name === "NotAllowedError") {
        // Branch to code for requesting permission.
      } else if (event.error.name === "NotReadableError") {
        console.log("Cannot connect to the sensor.");
      }
    };

    sensor.start();
  } catch (error) {
    // Handle construction errors.
    if (error.name === "SecurityError") {
      console.log("Sensor construction was blocked by a feature policy.");
    } else if (error.name === "ReferenceError") {
      console.log("Sensor is not supported by the User Agent.");
    } else {
      throw error;
    }
  }
};

export default lightLevels;

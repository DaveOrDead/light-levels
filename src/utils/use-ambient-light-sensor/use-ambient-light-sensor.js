const useAmbientLightSensor = callback => {
  try {
    const sensor = new AmbientLightSensor();

    sensor.onreading = () => callback(sensor.illuminance);

    sensor.onerror = e => {
      // Handle runtime errors.
      if (e.error.name === "NotAllowedError") {
        // Branch to code for requesting permission.
        console.log("Permission to access sensor was denied.");
      } else if (e.error.name === "NotReadableError") {
        console.log("Cannot connect to the sensor.");
      }
    };

    sensor.start();

    return sensor;
  } catch (error) {
    // Handle construction errors.
    if (error.name === "SecurityError") {
      console.log("Sensor construction was blocked by the Feature Policy.");
    } else if (error.name === "ReferenceError") {
      console.log("Sensor is not supported by the User Agent.");
    } else {
      throw error;
    }
  }
};

export default useAmbientLightSensor;

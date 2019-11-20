const createDeviceLightSensor = callback => {
  const state = {
    isActive: false
  };

  const handleDeviceLight = e => callback(e.value);

  const start = () => {
    if (!state.isActive) {
      window.addEventListener("devicelight", handleDeviceLight);
      state.isActive = true;
    } else {
      console.warn("This instance of LightLevels is already running");
    }
  };
  const stop = () => {
    if (state.isActive) {
      window.removeEventListener("devicelight", handleDeviceLight);
      state.isActive = false;
    } else {
      console.warn("This instance of LightLevels has already been stopped");
    }
  };
  return Object.freeze({
    start,
    stop
  });
};

const useDeviceLight = callback => {
  try {
    const sensor = createDeviceLightSensor(callback);
    sensor.start();
    return sensor;
  } catch (error) {
    throw error;
  }
};

export default useDeviceLight;

const createDeviceLightSensor = callback => {
  const handleDeviceLight = e => callback(e.value);

  const start = () => window.addEventListener("devicelight", handleDeviceLight);
  const stop = () =>
    window.removeEventListener("devicelight", handleDeviceLight);
  return {
    start,
    stop
  };
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

import removeClassesWithPrefix from "../removeClassesWithPrefix/removeClassesWithPrefix";

// Probably only really need to remove previous class applied but figured
// remove all in case multiple had been applied from elsewhere
const setLightLevelClasses = prefix => {
  const html = document.getElementsByTagName("html")[0];
  const removeLightLevelClasses = removeClassesWithPrefix(prefix);

  return luxName => {
    html.className = `${removeLightLevelClasses(
      html.className
    )} ${prefix}${luxName}`.trim();
  };
};

export default setLightLevelClasses;

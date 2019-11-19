import removeClassesWithPrefix from "../remove-classes-with-prefix";

// Probably only really need to remove `prevLuxText` class but figured
// remove all in case multiple had been applied from elsewhere
const getUpdateDomFunc = prefix => {
  const root = document.getElementsByTagName("html")[0];
  const stripLightLevelClasses = removeClassesWithPrefix(prefix);

  return luxText => {
    root.className = `${stripLightLevelClasses(
      root.className
    )} ${prefix}${luxText}`.trim();
  };
};

export default getUpdateDomFunc;

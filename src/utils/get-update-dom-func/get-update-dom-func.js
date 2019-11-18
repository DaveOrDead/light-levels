import removeClassesWithPrefix from "../remove-classes-with-prefix";

// Probably only really need to remove `prevLuxText` class but figured
// remove all in case multiple had been applied from elsewhere
const getUpdateDomFunc = prefix => {
  const { body } = document;
  const stripLightLevelClasses = removeClassesWithPrefix(prefix);

  return luxText => {
    body.className = `${stripLightLevelClasses(
      body.className
    )} ${prefix}${luxText}`.trim();
  };
};

export default getUpdateDomFunc;

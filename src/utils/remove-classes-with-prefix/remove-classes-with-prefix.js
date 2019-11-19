const removeClassesWithPrefix = prefix => classList =>
  classList
    .split(" ")
    .filter(className => className.lastIndexOf(prefix, 0) !== 0)
    .join(" ")
    .trim();

export default removeClassesWithPrefix;

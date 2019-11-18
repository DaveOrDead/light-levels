const removeClassesWithPrefix = prefix => className =>
  className
    .split(" ")
    .filter(klass => klass.lastIndexOf(prefix, 0) !== 0)
    .join(" ")
    .trim();

export default removeClassesWithPrefix;

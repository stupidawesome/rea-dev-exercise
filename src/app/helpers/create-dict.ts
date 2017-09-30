export function createDict (propName, collection) {
  const dict = [];
  if (collection) {
    for (const value of collection) {
      dict[value[propName]] = value;
    }
  }
  return dict;
}

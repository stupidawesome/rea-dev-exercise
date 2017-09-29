export function createDict (propName, collection) {
  const dict = [];
  if (collection) {
    for (const property of collection) {
      dict[propName] = property;
    }
  }
  return dict;
}

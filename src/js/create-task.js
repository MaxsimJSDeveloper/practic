export function createTask(event) {
  const objData = {};
  new FormData(event.currentTarget).forEach((value, key) => {
    objData[key] = value;
  });
  return objData;
}

/**
 * Create a function getListStudentIds that returns an array of ids from a
 * list of object.
 * This function is taking one argument which is an array of objects
 * If the argument is not an array, the function is returning an empty array.
 * You must use the map function on the array.
 */
export default function getListStudentIds(arr) {
  let newArr = [];
  if (arr instanceof Array) {
    newArr = arr.map((item) => item.id);
  }

  return newArr;
}


// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(arguments.length == 0) {
    return [];
  }
  let arr = [];
  matrix.forEach((element, index) => {
    if(index % 2 == 0) {
      element.forEach(num => {
        arr.push(num);
      })
    } else {
      element.reverse().forEach(num => {
        arr.push(num);
      })
    }
  });
  return arr;
}

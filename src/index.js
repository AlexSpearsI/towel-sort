
// You should implement your task here.

module.exports = function towelSort(matrix) {
  if (!Array.isArray(matrix)) {
    return [];
  } else {
    return matrix.reduce((sum, arr, index) => (index % 2 == 0) ? sum.concat(arr) : sum.concat(arr.reverse()), []);
  }
}
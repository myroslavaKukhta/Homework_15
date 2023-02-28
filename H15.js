'use strict';

const arr = [1, 2, 3, 4, 5, 6, 7];
const it = [4];

function removeElement(array, item) {
  array.splice(item, 1);
  return array;
}

console.log(removeElement(arr, it));
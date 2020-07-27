'use strict';

class Sort {
  selectionSort(array) {
    let sortedArray = [];
    let smallest;
    while (array.length > 0) {
      array.forEach((item, i) => {
        smallest = this.findSmallest(array);
        sortedArray.push(array[smallest]);
        array.splice(smallest, 1);
      });
    }
    return sortedArray;

  }
  findSmallest(array) {
    let smallest = array[0];
    let smallest_index = 0;
    array.forEach((item, i) => {
      if (item < smallest) {
        smallest = item;
        smallest_index = i;
      }
    });
    return smallest_index;
  }
}

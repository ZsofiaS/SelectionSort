'use strict';

class Sort {
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

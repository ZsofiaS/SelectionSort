'use strict';

describe('Sort', () => {
  let sort = new Sort();
  describe('#findSmallest', () => {
    it('returns smallest number index in array given 1 element in array', () => {
      expect(sort.findSmallest([1])).toEqual(0);
    })
    it('returns smallest number index in array', () => {
      expect(sort.findSmallest([1, 2, 3])).toEqual(0);
    })
    it('returns smallest number index in array', () => {
      expect(sort.findSmallest([3, 2, 1])).toEqual(2);
    })
  })
  describe('#selectionSort', () => {
    it('returns a sorted array when given input [1, 2, 3]', () => {
      expect(sort.selectionSort([1, 2, 3])).toEqual([1, 2, 3]);
    })
    it('returns a sorted array when given input [3, 2, 1]', () => {
      expect(sort.selectionSort([3, 2, 1])).toEqual([1, 2, 3]);
    })
  })
})

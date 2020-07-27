'use strict';

describe('Sort', () => {
  let sort = new Sort();
  describe('#findSmallest', () => {
    it('returns smallest number index in array', () => {
      expect(sort.findSmallest([1])).toEqual(0);
    })
  })
})

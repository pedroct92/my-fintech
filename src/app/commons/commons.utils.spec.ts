import { makeNumberRange } from '@my-fintech/commons/commons.utils';

describe('Utils tests', () => {
    it('should return filled array with its index position', () => {
        expect(makeNumberRange(2)).toEqual([0, 1]);
        expect(makeNumberRange(0)).toEqual([]);
    });
});

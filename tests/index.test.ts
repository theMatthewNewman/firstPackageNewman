import {fizzBuzz} from '../src/index';

test('returns an array with ["1","2","Fizz"]', () => {
    expect(fizzBuzz(3)).toStrictEqual(["1","2","Fizz"])
})
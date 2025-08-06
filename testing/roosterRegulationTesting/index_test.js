const assert = require('assert');
const Rooster = require('./index');

describe('Rooster', () => {
  describe('.announceDawn', () => {
    it('returns a rooster call', () => {
      // Your test goes here
      //setup, define expected result
     const expected = 'cock-a-doodle-doo!';
      //exercise, call function, method etc..
     const result = Rooster.announceDawn();
      //verify with assert
      assert.strictEqual(result, expected);
    });

  });
   describe('timeAtDawn', () => {
   it('returns its argument as a string', () => {
      // Your test goes here
      //setup, define expected result
      const expectedString = '12';
      //exercise, call function, method etc..
      const result2 = Rooster.timeAtDawn(12);
      //verify with assert
      assert.strictEqual(result2, expectedString);
    });
       it('throws an error if passed a number less than 0', () => {
      // Your test goes here
     assert.throws(
     () => {
      Rooster.timeAtDawn(-5);
     },
     RangeError
    );
    });
    it('throws an error if passed a number greater than 23', () => {
      // Your test goes here
       assert.throws(
     () => {
      Rooster.timeAtDawn(40);
     },
     RangeError
    );
    })
});
});

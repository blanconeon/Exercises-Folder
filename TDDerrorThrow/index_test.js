const assert = require('assert');
const Phrase =  require('./index.js')

describe('Phrase', () => {
  describe('.initials',() => {
   it('raises an error if the parameter passed in is not a string', () => {
  // Setup
  const nameInput = 14;   
  // Exercise
  const exercise = () => { Phrase.initials(nameInput) }; // exercise will hold the initials method and be callles when test runs (npm test)
  // Verification
  assert.throws(exercise, /only use string/); /*when exercise is ran if it throws the error, it expects /only use string/. initials throws "ERROR: only use string". in assert.throws it only has to be partially matching the thrown string error */       
})
});
});

/* /only use string/ The regular expression is used to check if the error message contains a specific pattern or words when an error is thrown. It helps confirm the error message is what you expect.*/
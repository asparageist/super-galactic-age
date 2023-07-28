import {Calculate} from './../src/js/galactic.js';
describe('Calculate', () => {
  let userAge;
  beforeEach(() => {

  });
  test('It should take the user`s earth age and store it in a class', () => {
    userAge = 56;
      expect(Calculate.age).toEqual(56);
  });
});

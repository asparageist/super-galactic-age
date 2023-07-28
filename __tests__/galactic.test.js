import {Calculate} from './../src/js/galactic.js';
describe('Calculate', () => {
  let userAge;
  beforeEach(() => {
    userAge = new Calculate();
  });
  test('It should take the user`s earth age and store it in a class', () => {
    userAge = new Calculate(56);
    expect(userAge.earthAge).toEqual(56);
  });
});

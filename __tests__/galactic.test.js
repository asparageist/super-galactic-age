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
  test('It should return the user`s age in the years of other planets in our solar system', () => {
    userAge = new Calculate(56);
    expect(userAge.earthAge).toEqual(56);
    expect(userAge.mercuryAge).toEqual(13);
    expect(userAge.venusAge).toEqual(34);
    expect(userAge.marsAge).toEqual(105);
    expect(userAge.jupiterAge).toEqual(664);
  });
});

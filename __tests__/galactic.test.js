import {Calculate} from './../src/js/galactic.js';
describe('Calculate', () => {
  let userAge;
  beforeEach(() => {
    userAge = new Calculate(56);
  });
  test('It should take the user`s earth age and store it in a class', () => {
    expect(userAge.earthAge).toEqual(56);
  });
  test('It should return the user`s age in the years of other planets in our solar system', () => {
    userAge.getAge(userAge);
    expect(userAge.earthAge).toEqual(56);
    expect(userAge.mercuryAge).toEqual(233);
    expect(userAge.venusAge).toEqual(90);
    expect(userAge.marsAge).toEqual(29);
    expect(userAge.jupiterAge).toEqual(4);
  });
});

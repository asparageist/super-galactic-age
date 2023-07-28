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
  test('It should determine how many years have passed since an age on each planet', () => {
    userAge.yearsPast(43);
    expect(userAge.earthNext).toEqual(13);
    expect(userAge.mercuryNext).toEqual(54);
    expect(userAge.venusNext).toEqual(20);
    expect(userAge.marsNext).toEqual(6);
    expect(userAge.jupiterNext).toEqual(1);
  });
});

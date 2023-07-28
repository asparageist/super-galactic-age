export class Calculate {
    constructor (earthAge) {
      this.earthAge = earthAge;
    }
    getAge () {
      this.mercuryAge = Math.floor(this.earthAge / 0.24);
      this.venusAge = Math.floor(this.earthAge / 0.62);
      this.marsAge = Math.floor(this.earthAge / 1.88);
      this.jupiterAge = Math.floor(this.earthAge / 11.86);
    }
    yearsPast(year2) {
      year2 = parseInt(year2);
      this.earthNext = this.earthAge - year2;
      this.mercuryNext = Math.floor((this.earthAge / 0.24) - (year2 / 0.24));
      this.venusNext = Math.floor((this.earthAge / 0.62) - (year2 / 0.62));
      this.marsNext = Math.floor((this.earthAge / 1.88) - (year2 / 1.88));
      this.jupiterNext = Math.floor((this.earthAge / 11.86) - (year2 / 11.86));
    }
}

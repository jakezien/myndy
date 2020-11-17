const Colors = {

  red0:  '#68272d',
  red1:  '#ff4a26',
  red2:  '#ffa899',
  red3:  '#ffd4bf',

  yellow0:  '#b75b00',
  yellow1:  '#fea600',
  yellow2:  '#fff100',
  yellow3:  '#fffbb1',

  green0:  '#236136',
  green1:  '#0cc045',
  green2:  '#8fffa1',
  green3:  '#c9ffd5',

  blue0:  '#1e3967',
  blue1:  '#1675da',
  blue2:  '#85f3ff',
  blue3:  '#cffffa',

  purple0:  '#371E68',
  purple1:  '#7748D7',
  purple2:  '#BCA6FF',
  purple3:  '#DDD6FF',

  grey0:  '#423d34',
  grey1:  '#90856f',
  grey2:  '#cbc5b9',
  grey3:  '#f5f1ea',

  get text() {
    return this.blue0
  },

  get textLight() {
    return this.blue3
  },

  get zeros() {
    return [
      this.red0,
      this.yellow0,
      this.green0,
      this.blue0,
      this.purple0,
      // this.grey0,
    ]
  },

  get ones() {
    return [
      this.red1,
      this.yellow1,
      this.green1,
      this.blue1,
      this.purple1,
      // this.grey1,
    ]
  },

  get twos() {
    return [
      this.red2,
      this.yellow2,
      this.green2,
      this.blue2,
      this.purple2,
      // this.grey2,
    ]
  },

  get threes() {
    return [
      this.red3,
      this.yellow3,
      this.green3,
      this.blue3,
      this.purple3,
      // this.grey3,
    ]
  }

};

export default Colors
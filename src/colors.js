const Colors = {

  red0:  '#813831',
  red1:  '#ff4a26',
  red2:  '#ffa899',
  red3:  '#FFD9C7',

  orange0:  '#A04508',
  orange1:  '#FF8C00',
  orange2:  '#FFC783',
  orange3:  '#FFE3C2',

  yellow0:  '#995C00',
  yellow1:  '#FFCC00',
  yellow2:  '#FFE680',
  yellow3:  '#FFF2CC',

  green0:  '#236136',
  green1:  '#0cc045',
  green2:  '#8fffa1',
  green3:  '#c9ffd5',

  blue0:  '#082568',
  blue0a: '#08399B',
  blue1:  '#006FE6',
  blue2:  '#85f3ff',
  blue3:  '#cffffa',

  purple0:  '#371E68',
  purple1:  '#7748D7',
  purple2:  '#BCA6FF',
  purple3:  '#DDD6FF',

  grey0:  '#383F47',
  grey1:  '#787F87',
  grey2:  '#C5CCD3',
  grey3:  '#EAF0F5',

  get text() {
    return this.blue0
  },

  get textLight() {
    return this.blue3
  },

  get zeros() {
    return [
      this.red0,
      this.orange0,
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
      this.orange1,
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
      this.orange2,
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
      this.orange3,
      this.yellow3,
      this.green3,
      this.blue3,
      this.purple3,
      // this.grey3,
    ]
  }

};

export default Colors
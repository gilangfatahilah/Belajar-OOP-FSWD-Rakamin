class Persegi {
  constructor(sisi) {
    this.sisi = sisi;
  }

  keliling() {
    return this.sisi * 4 + "cm";
  }

  luas() {
    return this.sisi * this.sisi;
  }
}

const persegi = new Persegi(4);
console.log(persegi.keliling());

class Lingkaran {
  constructor(jariJari) {
    this.jariJari = jariJari;
  }

  keliling() {

    return 2 * Math.PI * this.jariJari;

  }

  luas() {
    return Math.PI * this.jariJari * this.jariJari;
  }
}

const lingkaran = new Lingkaran(27);
console.log(lingkaran.keliling());
console.log(lingkaran.luas());

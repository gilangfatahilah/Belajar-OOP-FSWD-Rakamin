class Persegi {
  constructor(sisi) {
    this.sisi = sisi;
  }

  luas() {
    return this.sisi * this.sisi;
  }

  keliling() {
    return this.sisi * 4;
  }
}

const persegi = new Persegi(4);
console.log(persegi.keliling(), persegi.luas());

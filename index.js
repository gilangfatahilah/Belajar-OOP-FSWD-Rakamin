class Persegi {
  constructor(sisi) {
    this.sisi = sisi;
  }

  keliling() {
    return this.sisi * 4;
  }

  luas() {
    return this.sisi * this.sisi;
  }
}

const persegi = new Persegi(4);
console.log(persegi.keliling());
console.log(persegi.luas());

class PersegiPanjang {
  constructor(panjang, lebar) {
    this.panjang = panjang;
    this.lebar = lebar;
  }

  keliling() {
    return 2 * (this.panjang + this.lebar);
  }

  luas() {
    return this.panjang * this.lebar;
  }
}

const persegiPanjang = new PersegiPanjang(4, 2);
console.log(persegiPanjang.keliling());
console.log(persegiPanjang.luas());

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

class Segitiga {
  constructor(alas, tinggi, sisi) {
    this.alas = alas;
    this.tinggi = tinggi;
    this.sisi = sisi;
  }

  keliling() {
    return this.sisi * 3;
  }

  luas() {
    return 0.5 * this.alas * this.tinggi;
  }
}

const segitiga = new Segitiga(28, 20, 12);
console.log(segitiga.keliling());
console.log(segitiga.luas());

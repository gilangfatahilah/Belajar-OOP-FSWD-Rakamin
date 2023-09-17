class Trapesium {
  constructor(panjangAtas, panjangBawah, tinggi, sisiKiri, sisiKanan) {
    this.panjangAtas = panjangAtas;
    this.panjangBawah = panjangBawah;
    this.tinggi = tinggi;
    this.sisiKiri = sisiKiri;
    this.sisiKanan = sisiKanan;
  }

  hitungLuas() {
    return ((this.panjangAtas + this.panjangBawah) / 2) * this.tinggi;
  }

  hitungKeliling() {
    return this.panjangAtas + this.panjangBawah + this.sisiKiri + this.sisiKanan;
  }
}


const trapesium1 = new Trapesium(4, 9, 5, 7, 8);
const luas1 = trapesium1.hitungLuas();
const keliling1 = trapesium1.hitungKeliling();

console.log(`Luas trapesium 1 adalah ${luas1}`);
console.log(`Keliling trapesium 1 adalah ${keliling1}`);

// No. 3 Buat modul Node.js yang mengekspor fungsi untuk menjumlahkan dua angka,
// dan impor modul tersebut di file lain.
const tambah = require("./tambah");

const hasil = tambah(5, 3);
console.log(`Hasil penjumlahannya adalah: ${hasil}`);

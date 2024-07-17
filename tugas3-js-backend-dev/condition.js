// Buat program yang meminta input dari pengguna dan menggunakan struktur if else untuk menentukan apakah angka tersebut genap atau ganjil.
const a = 6;
const b = 7;

if (a % 2 === 0){
    console.log(`${a} adalah bilangan genap`);
} else {
    console.log(`${a} adalah bilangan ganjil`);
}

const bilangan = b % 2 === 1 ? `${b} adalah bilangan ganjil` : `${b} adalah bilangan genap`;
console.log(bilangan);

// Buat program yang menggunakan switch untuk mencetak nama hari berdasarkan nomor hari (1 untuk Senin, 2 untuk Selasa, dst.).
let angka = 4;
let hari;

switch (angka){
    case 1 :
        hari = "Senin";
        break;
    case 2 :
        hari = "Selasa";
        break;
    case 3 :
        hari = "Rabu";
        break;
    case 4 :
        hari = "Kamis";
        break;
    case 5 :
        hari = "Jumat";
        break;
    case 6 :
        hari = "Sabtu";
        break;
    case 7 :
        hari = "Minggu";
        break;
    default:
        hari = "Tidak Valid";
}
console.log(hari);
// Buat fungsi yang menghitung luas lingkaran berdasarkan jari-jari yang diberikan.
let radius = 14;
console.log(`Luas lingkaran dengan jari-jari ${radius} adalah ${luas(radius)}`);
function luas(radius){
    return Math.PI * radius * radius;
}

// Buat fungsi yang menerima array angka dan mengembalikan array baru dengan angka-angka yang dikuadratkan.
let angka = [1,2,3,4,5];
console.log(`Ini angka yang sudah dikuadratkan ${kuadrat(angka)}`)
function kuadrat(angka){
    return angka.map((e) => e*e);
}
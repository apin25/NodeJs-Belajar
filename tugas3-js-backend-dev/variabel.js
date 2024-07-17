// Buat program yang mendemonstrasikan penggunaan variabel let, const, dan var.
let nama = "Alvin";
let isHidup = true;
let mataKuliah = "Propensi";
let nilaiPropen = 86.6;
let jumlahAnak = null;
let notDefined;
let isUdahLulus = false;
let matkulFav = {
    nama : "TIK Pembangunan",
    nilai : 86,
    kelas: "Lantai 4"
}
let angka = [1,2,3,4,5]
const buku = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: false,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  }
]
var status = "Mahasiswa";

//Buat program yang mencakup semua tipe data primitif dan non-primitif, serta menggunakan operator aritmatika dan perbandingan.
console.log(isHidup || false )
console.log("Apa" && false);
console.log(0 && "ayam");
console.log("Makan" === "Minum");
console.log(true == "Minum");
console.log("Makan" !== "Minum");
console.log(angka[0] % angka[2]);
console.log(angka[1] * angka[4]);
console.log((nilaiPropen + matkulFav.nilai)/2)
console.log(nilaiPropen <= matkulFav.nilai);
function getBook(id) {
  return buku.find((b) => b.id === id);
}
console.log(getBook(1).pages + getBook(2).pages)
console.log(getBook(1).reviews.goodreads.rating - getBook(3).reviews.goodreads.rating);
console.log(getBook(1).pages > getBook(2).pages);
console.log(getBook(3).pages < getBook(2).pages);
console.log(
  getBook(1).reviews.goodreads.ratingsCount >= getBook(3).reviews.goodreads.ratingsCount
);
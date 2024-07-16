//No. 1 Buat program Node.js sederhana yang membaca file teks dan mencetak isinya ke konsol.

const fs = require("fs");

const fileName = "baca.txt";

fs.readFile(fileName, "utf8", (err, data) => {
  if (err) {
    console.error("Terjadi kesalahan saat membaca file:", err);
    return;
  }
  console.log(data);
});

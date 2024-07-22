let data = [
  { id: 1, name: "Elektronik" },
  { id: 2, name: "Perabotan" },
];

let produk = [
  { id: 1, name: "Laptop", category: "Elektronik" },
  { id: 2, name: "Meja", category: "Perabotan" },
];

const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// No. 1 Buatlah route GET yang mengembalikan daftar semua kategori produk dalam aplikasi e-commerce Anda.
app.get('/api/list-kategori/', (req, res) => {
    res.json(data);
})
// No. 2 Buatlah route GET yang mengembalikan detail kategori berdasarkan ID. Anda bisa menggunakan array kategori dari soal sebelumnya.
app.get('/api/list-kategori/:id/', (req, res) => {
    const idKategori = parseInt(req.params.id);
    const kategori = data.find((e) => e.id === idKategori);
    if (kategori) {
        res.json(kategori);
    } else {
        res.status(404).json({message: 'Kategori tidak ditemukan'})
    }
});

// No. 3 Buatlah route POST yang menambahkan kategori baru ke array. Kategori baru harus diberikan melalui body request dalam bentuk JSON
app.post('/api/kategori/', (req, res) => {
    const newKategori = req.body;
    newKategori.id = data.length ? data[data.length - 1].id + 1 : 1;
    data.push(newKategori);
    res.status(201).json(newKategori);
});

// No. 4 Buatlah route PUT yang memperbarui kategori berdasarkan ID. Data kategori baru harus diberikan melalui body request dalam bentuk JSON
app.put("/api/kategori/:id/", (req, res) => {
    const idKategori = parseInt(req.params.id);
    const kategoriIndex = data.findIndex((e) => e.id === idKategori);
    if (kategoriIndex !== -1) {
    data[kategoriIndex] = { id: idKategori, ...req.body };
    res.json(data[kategoriIndex]);
    } else {
    res.status(404).json({ message: "Kategori tidak ditemukan" });
    }
});

// No. 5 Buatlah route DELETE yang menghapus kategori berdasarkan ID.
app.delete('/api/kategori/:id/', (req, res) => {
    const idKategori = parseInt(req.params.id);
    data = data.filter((e) => e.id !== idKategori);
    res.status(204).send();
});

// No.6 Buatlah route GET dengan query string untuk mencari produk berdasarkan nama.
app.get("/api/produk/search", (req, res) => {
    const query = req.query.q.toLowerCase();
    const results = produk.filter((e) => e.name.toLowerCase().includes(query));
    res.json({ query: query, results: results });
});

// No.7 Buatlah route GET dengan parameter dan query string untuk mendapatkan produk dalam kategori tertentu dan mencari berdasarkan nama. Anda bisa menggunakan array produk dari soal sebelumnya.
app.get("/api/produk/:category/search", (req, res) => {
    const category = req.params.category.toLowerCase();
    const query = req.query.q ? req.query.q.toLowerCase() : "";

    const results = produk.filter(
    (p) =>
        p.category.toLowerCase() === category &&
        p.name.toLowerCase().includes(query)
    );

    res.json({ category: category, query: query, results: results });
});
app.listen(port, () => {
  console.log(`Server is running at <http://localhost>:${port}`);
});
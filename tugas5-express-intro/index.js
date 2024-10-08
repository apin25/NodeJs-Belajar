const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

app.get("/hello", (req, res) => {
  res.json({
    message: "Success fetch message",
    data: "Hello World!",
  });
});

app.get("/user", (req, res) => {
  res.json({
    message: "Success fetch user",
    data: {
      id: 1,
      name: "Budi",
      username: "budidu",
      email: "budidu@mail.com",
    },
  });
});

app.use(express.static(path.join(__dirname, "public")));

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});

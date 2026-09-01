const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

const books = require("./data/books.json");

// 全部書籍
app.get("/books", (req, res) => {
  res.json(books);
});

// 單一本書
app.get("/books/:id", (req, res) => {
  const id = Number(req.params.id);

  const book = books.find(book => book.id === id);

  if (!book) {
    return res.status(404).json({
      message: "找不到書籍"
    });
  }

  res.json(book);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
});

const express = require("express");
console.log(typeof express);
const app = express(); 



const books = require("./data/books.json");

  app.get("/books", (req, res) => {
    res.json(books);
  });
  
  app.listen(3000, () => {
    console.log("Server is running!");
  });
const express = require("express");
const server = express();
const port = 4000;

server.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

server.get("/json", (req, res) => {
  res.json({ message: "Hello world" });
});

server.listen(port, () => {
  console.log(`Server listening at ${port}`);
});

let data = require("./data");

server.get("/items", (req, res) => {
  res.json(data);
});

server.get("/items/:id", (req, res) => {
  const itemId = req.params.id;
  const item = data.find(_item => _item.id === itemId);

  if (item) {
    res.json(item);
  } else {
    res.json({ message: `item ${itemId} doesn't exist` });
  }
});

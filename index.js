import express from "express";

const app = express();

const port = 8000;

app.get("/home", (req, res) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log("🚀 ~ file: index.js ~ line 13 ~ app.listen ~ port", port);
});

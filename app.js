import express from "express";

const app = express();
//const port = 3000;

app.get("/", (req, res) => {
  return res.send("Premiere route !");
});

app.listen(3000, () => {
  console.log(`Port : 3000`);
});

import express from "express";
import plats from "../data/plats.js";

const platsRouter = express.Router();

app.get("/plats", (req, res) => {
  return res.json(plats);
});

// Selectionner par ID
app.get("/plats/:platID", (req, res) => {
  let platID = req.params.platID;
  let plat = plats.find((element) => element.id == platID);
  return res.json(plat);
});

//Rajouter un plat // ????
app.post("/plats", (req, res) => {
  let newPlat = {
    id: plats.length + 1,
    title: req.body.title,
    origine: req.body.origine,
  };
  plats.push(newPlat);
  return res.json(newPlat);
});

export default platsRouter;

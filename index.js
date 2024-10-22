import express from "express";
import "dotenv/config";
import cors from "cors";

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const plats = [
  {
    id: 1,
    title: "Pate carbonara",
    origine: "Italienne",
  },
  {
    id: 2,
    title: "Paella",
    origine: "Espagnol",
  },
  {
    id: 3,
    title: "Blanquette de veau",
    origine: "France",
  },
  {
    id: 4,
    title: "Pad Thai",
    origine: "Thailande",
  },
];

app.get("/", (req, res) => {
  return res.send(`Welcome`);
});

app.get("/plats", (req, res) => {
  return res.json(plats);
});

// Selectionner par ID
app.get("/plats/:platID", (req, res) => {
  let platID = req.params.platID;
  let plat = plats.find((element) => element.id == platID);
  return res.json(plat);
});

//Rajouter un plat
app.post("/plats", (req, res) => {
  let newPlat = {
    id: plats.length + 1,
    title: req.body.title,
    origine: req.body.origine,
  };
  plats.push(newPlat);
  return res.json(newPlat);
});

app.listen(PORT, () => console.log(`Server is running on port 4000`));

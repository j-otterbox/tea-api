const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 3000;

app.use(cors());

const tea = {
  oolong: {
    type: "black",
    origin: "Yo Mama's House",
    waterTemp: 200,
    steepTimeSeconds: 182,
    caffeinated: true,
    flavor: "delicious",
  },
  matcha: {
    type: "green",
    origin: "Yo Mama's House",
  },
  unknown: {
    type: "unknown",
    origin: "unknown",
    waterTemp: null,
    steepTimeSeconds: null,
    caffeinated: null,
    flavor: "unknown",
  },
};

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/api", (req, res) => {
  return res.json(tea);
});

app.get("/api/:name", (req, res) => {
  return res.json(tea[req.params.name.toLowerCase()] || tea["unknown"]);
});

app.listen(process.env.PORT || PORT, () => {
  console.log(`The server is running on port ${PORT}, better go catch it...`);
});

const express = require("express");
const app = express();
const PORT = 4997;

app.use(express.json());
app.listen(PORT, () => console.log(`it's alive on localhost:${PORT}`));

app.get("/tshirt", (req, res) => {
  res.status(200).send({
    tshirt: "tshirttttt",
    doggy: "very cute doggie",
  });
});

app.post("/tshirt/:id", (req, res) => {
  const { id } = req.params;
  const { logo } = req.body;

  if (!logo) {
    res.send(418).send({ message: "we need a logo!" });
  }

  res.send({
    tshirt: `tttshihiuururt with your ${logo} and ID of ${id}`,
  });
});

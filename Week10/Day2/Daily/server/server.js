const express = require("express");
const cors = require("cors");
const app = express();

const PORT = 3001;
app.use(cors());
app.use(express.json());

app.get("/api/hello", (req, res) => res.send("Hello from express"));
app.post("/api/world", (req, res) => {
  res.send({ message: `me recive POST,yu sent message: ${req.body}` });
});

app.listen(PORT, () => console.log("Port:", PORT));

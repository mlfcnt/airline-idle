const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const path = require("path");

const app = express();

app.use(express.json());
app.use(cors("http://localhost:3000"));
app.use(morgan("common"));

app.use(express.static(path.join(__dirname, "./client/build")));

const port = process.env.PORT || 4000;

// app.get("/", (req, res) => {
//   res.status(200).send("yeboi");
// });

app.listen(port, () => {
  `Connected to the matrix @ ${port}`;
});

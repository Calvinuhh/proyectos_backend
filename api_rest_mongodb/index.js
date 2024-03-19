const connection = require("./database/connection");
const express = require("express");
const cors = require("cors");
const PORT = 3001;
const router = require("./routes/article");

connection();

const app = express();

app.use(cors());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use("/api", router);

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto: http://localhost:${PORT}`);
});

module.exports = app;

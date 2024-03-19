import app from "./src/server.js";
const { PORT } = process.env;
import database from "./src/db/database.js";

(async function connect() {
  try {
    await database.sync({ force: false });
    console.log("La conexion con la base de datos ha sido establecida");
    app.listen(PORT, () => {
      console.log(`Servidor escuchando en el puerto http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
})();

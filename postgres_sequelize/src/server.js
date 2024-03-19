import express from "express";
import projectsRoutes from "./routers/projects.routes.js";
import pruebaRouter from "./routers/prueba.routes.js";

const app = express();

app.use(express.json());
app.use(pruebaRouter);
app.use(projectsRoutes);

export default app;

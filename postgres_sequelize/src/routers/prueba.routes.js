import { Router } from "express";

const pruebaRouter = Router();

pruebaRouter.get("/", (req, res) => {
  res.send("Hello world");
});

export default pruebaRouter;

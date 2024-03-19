import { Router } from "express";
import {
  getProjects,
  createProjects,
  updateProject,
  deleteProject,
} from "../controllers/projects.controller.js";

const projectsRoutes = Router();

projectsRoutes.get("/projects", getProjects);
projectsRoutes.post("/projects", createProjects);
projectsRoutes.put("/projects/:id", updateProject);
projectsRoutes.delete("/projects/:id", deleteProject);
projectsRoutes.get("/projects/:id");

export default projectsRoutes;

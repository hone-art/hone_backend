import express from "express";
import entriesController from "../controllers/entries.controller";

const router = express.Router();

// ENTRIES ROUTES
router.get("/:id", entriesController.getById);
router.post("/", entriesController.create);
router.patch("/:id", entriesController.update);
router.delete("/:id", entriesController.delete);
router.get("/projects/:projectId", entriesController.getByProjectId);
router.get("/users/:userId", entriesController.getByUserId);

export default router;
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
router.get("/users/:userId/:date", entriesController.getByUserIdAndDate);
router.get("/users/:userId/months/:month", entriesController.getByUserIdAndMonth);
router.get("/users/:userId/streaks/:date", entriesController.getStreakByUserId);
router.get("/users/:userId/limit/all", entriesController.getTotalByUserId);
router.get("/random/:limit", entriesController.getRandomByIsInspiring);

export default router;
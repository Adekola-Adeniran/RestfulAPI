import express from "express";

import {
  createItem,
  getItems,
  getItem,
  deleteItem,
  updateItem,
} from "../controllers/items.js";

const router = express.Router();

// all routes in here are starting with /users
router.get("/", getItems);

router.post("/", createItem);

router.get("/:id", getItem);

router.delete("/:id", deleteItem);

router.put("/:id", updateItem);

export default router;

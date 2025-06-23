import express from "express";

import {
  createItem,
  getItems,
  getItem,
  deleteItem,
  updateItem,
} from "../controllers/items.js";
import { validateItem } from "../middlewares/validateItem.js";

const router = express.Router();

// all routes in here are starting with /users
router.get("/", getItems);

router.post("/",validateItem, createItem);

router.get("/:id", getItem);

router.delete("/:id", deleteItem);

router.put("/:id",validateItem, updateItem);

export default router;

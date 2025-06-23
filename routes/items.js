import express from "express";

import {
  createItem,
  getItems,
  getItem,
  deleteItem,
  updateItem,
} from "../controllers/items.js";
<<<<<<< HEAD
import { validateItem } from "../middlewares/validateItem.js";
=======
>>>>>>> 8b7cf62572673eb0dc2a5420a035392fbe911d04

const router = express.Router();

// all routes in here are starting with /users
router.get("/", getItems);

<<<<<<< HEAD
router.post("/",validateItem, createItem);
=======
router.post("/", createItem);
>>>>>>> 8b7cf62572673eb0dc2a5420a035392fbe911d04

router.get("/:id", getItem);

router.delete("/:id", deleteItem);

<<<<<<< HEAD
router.put("/:id",validateItem, updateItem);
=======
router.put("/:id", updateItem);
>>>>>>> 8b7cf62572673eb0dc2a5420a035392fbe911d04

export default router;

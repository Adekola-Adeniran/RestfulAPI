import express from "express";

<<<<<<< HEAD

import itemsRoutes from "./routes/items.js";
import { logger } from "./middlewares/logger.js";
import { errorHandler } from "./middlewares/errorHandler.js";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(logger)
=======
import itemsRoutes from "./routes/items.js";

const app = express();
const PORT = 5000;

app.use(express.json());
>>>>>>> 8b7cf62572673eb0dc2a5420a035392fbe911d04

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.use("/items", itemsRoutes);

<<<<<<< HEAD
app.use(errorHandler)

=======
>>>>>>> 8b7cf62572673eb0dc2a5420a035392fbe911d04
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

app.listen(PORT, () =>
<<<<<<< HEAD
  console.log(`Server running on port: http://localhost:${PORT}`)
=======
  console.log(`Server Running on port: http://localhost:${PORT}`)
>>>>>>> 8b7cf62572673eb0dc2a5420a035392fbe911d04
);

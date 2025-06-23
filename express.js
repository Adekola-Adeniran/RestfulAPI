import express from "express";


import itemsRoutes from "./routes/items.js";
import { logger } from "./middlewares/logger.js";
import { errorHandler } from "./middlewares/errorHandler.js";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(logger)

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.use("/items", itemsRoutes);

app.use(errorHandler)

app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

app.listen(PORT, () =>
  console.log(`Server running on port: http://localhost:${PORT}`)
);

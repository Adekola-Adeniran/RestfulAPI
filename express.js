import express from "express";

import itemsRoutes from "./routes/items.js";

const app = express();
const PORT = 5000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.use("/items", itemsRoutes);

app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

app.listen(PORT, () =>
  console.log(`Server Running on port: http://localhost:${PORT}`)
);

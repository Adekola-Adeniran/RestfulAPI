import express from "express";
import bodyParser from "body-parser";


import itemsRoutes from "./routes/items.js";

const app = express();
const PORT = 5000;

app.use(express.json())
app.use(bodyParser.json());

app.use("/items", itemsRoutes);

app.get("/", (req, res) => {
  res.status(200).send("Hello, World!");
});

app.use((req, res)=>{
  res.status(404).json({error: "Route not found"})
})

app.listen(PORT, () =>
  console.log(`Server Running on port: http://localhost:${PORT}`)
);

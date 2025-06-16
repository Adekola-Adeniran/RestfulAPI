import express from "express";
import bodyParser from "body-parser";


import usersRoutes from "./routes/items.js";

const app = express();
const PORT = 5000;

app.use(express.json())
app.use(bodyParser.json());

app.use("/items", usersRoutes);

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.get('/items',(res,req)=>{
  res.json(items)
})

app.listen(PORT, () =>
  console.log(`Server Running on port: http://localhost:${PORT}`)
);

import { v4 as uuidv4 } from "uuid";

let items = [];
export const getItems = (req, res) => {
  res.json(items);
};

export const createItem = (req, res) => {
  const { name, description } = req.body;
  const newItem = { id: uuidv4(), name, description };
  items.push(newItem);
  res.status(201).json(newItem);
};

export const getItem = (req, res) => {
  const foundItem = items.find((item) => item.id === req.params.id);
  if (!foundItem) {
    return res.status(404).json({ error: "Item not found" });
  }
  res.json(foundItem);
};

export const deleteItem = (req, res) => {
  const index = items.findIndex((item) => item.id === req.params.id);
  if (index === -1) {
    return res.status(404).json({ error: "Item not found" });
  }
  items.splice(index, 1);
  res.status(200).json(`Item with id ${req.params.id} deleted successfully`);
};

export const updateItem = (req, res) => {
  const { name, description } = req.body;

  const item = items.find((item) => item.id === req.params.id);
  if (!item) {
    res.status(404).json({ error: "Item not found" });
  }
  item.name = name;
  item.description = description;
  res.json(item);
};

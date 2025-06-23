import { v4 as uuidv4 } from "uuid";

let items = [];
export const getItems = (req, res) => {
  res.json(items);
};

export const createItem = (req, res) => {
<<<<<<< HEAD
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
=======
  const { firstName, lastName, age, ...extras } = req.body;

  if (!firstName || !lastName || typeof age !== "number") {
    res.status(400).json({
      error: "All fields required: firstName, lastName, age(number)",
    });
  }
  if (Object.keys(extras).length > 0) {
    return res.status(400).json({ error: "Request contain unknown fields" });
  }
  const newItem = { firstName, lastName, age, id: uuidv4() };
  items.push(newItem);

  res.status(201).json({
    message: `Item with the name ${newItem.firstName} with id ${newItem.id} is added to the database`,
  });
};

export const getItem = (req, res) => {
  const { id } = req.params;

  const foundItem = items.find((item) => item.id === id);
  if (!foundItem) {
    return res.status(404).json({ error: "Item not found" });
  }
  res.status(200).json(foundItem);
};

export const deleteItem = (req, res) => {
  const { id } = req.params;
  const index = items.findIndex((item) => item.id === id);
  if (index === -1) {
    return res.status(404).json({ error: "Item not found" });
  }

  items.splice(index, 1);

  res
    .status(200)
    .json({ message: `Item with id ${id} has been deleted from the database` });
};

export const updateItem = (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, age } = req.body;

  const item = items.find((item) => item.id === id);
  if (!item) {
    res.status(404).json({ error: "Item not found" });
  }
  if (firstName !== undefined) {
    item.firstName = firstName;
  }
  if (lastName !== undefined) {
    item.lastName = lastName;
  }
  if (age !== undefined && typeof age === "number") {
    item.age = age;
  } else res.status(404).json({ error: "Not a number" });

  res.status(200).json({ message: `Item with the id ${id} has been updated` });
>>>>>>> 8b7cf62572673eb0dc2a5420a035392fbe911d04
};
